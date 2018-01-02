import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RouteActions from '../actions/RouteActions';
import nextBusAPI from '../utils/nextBusAPI';
import CityMap from './CityMap';
import TitleBar from './TitleBar';

class App extends Component {
  static propTypes = {
    isFetchingRoutes: PropTypes.bool,
    routes: PropTypes.object,
    routeChange: PropTypes.func,
    selectedRoute: PropTypes.object,
    selectedVehicleLocation: PropTypes.object,
    vehicleLocations: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    routeChange: () => {}
  };

  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(RouteActions.fetchRoutesIfNeeded(nextBusAPI.ROUTE_LIST));
  }

  componentDidMount() {
    setTimeout(function() {
      this.locateAllBuses();
    }.bind(this), 15000);
  }

  locateAllBuses() {
    const { dispatch, routes } = this.props;
    let vehicleArray = [];

    if (routes['route']) {
      let busRoutes = routes.route;
      for (let i = 0; i < busRoutes.length; i++) {
        const busLocation = dispatch(RouteActions.requestVehicleLocation(`${nextBusAPI.VEHICLE_LOATION}${busRoutes[i].tag}+t=${Date.now()}`));
        vehicleArray.push(busLocation);
      }

      dispatch(RouteActions.POPULATE_LOCATION_ARRAY(vehicleArray));
    }
  }

  routeChange(event) {
    const { dispatch } = this.props;
    dispatch(RouteActions.setRoute(event));
  }

  render() {
    const { routes } = this.props;

    const cityMap = () => {
      return (
        <CityMap minHeight={960} minWidth={960}/>
      );
    }

    let busRoutes;

    if (_.isEmpty(routes)) {
      busRoutes = [];
    }
    else {
      busRoutes = routes.route;
    }

    return(
      <MuiThemeProvider>
        <div className="app-container">
          <TitleBar dropDownOptions={busRoutes} dropDownChange={this.routeChange}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetchingRoutes: state.isFetchingRoutes,
    routes: state.routes,
    selectedRoute: state.vehicleRoute,
    selectedVehicleLocation: state.vehicleLocation,
    vehicleLocations: state.vehicleLocationsArray
  }
}

export default connect(mapStateToProps)(App);
