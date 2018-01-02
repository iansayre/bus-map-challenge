import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class RouteDropDown extends Component {
  static propTypes = {
    routeChange: PropTypes.func,
    routeOptions: PropTypes.array,
    routeValue: PropTypes.string
  };

  static defaultProps = {
    routeChange: () => {}
  };

  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange(event) {
    this.props.routeChange(event);
  }

  render() {
    const { routeOptions, routeValue } = this.props;

    let items = routeOptions.map((route, i) => {
      return (
        <MenuItem value={route.tag} key={i} primaryText={route.title} />
      );
    });

    return (
      <DropDownMenu maxHeight={320} value={routeValue} onChange={this.routeChange}>
        {items}
      </DropDownMenu>
    );
  }
}

export default RouteDropDown;
