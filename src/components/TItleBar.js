import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import AppBar from 'material-ui/AppBar';
import RouteDropDown from './RouteDropDown';

class TitleBar extends Component {
  static propTypes = {
    dropDownOptions: PropTypes.array,
    dropDownChange: PropTypes.func
  };

  static defaultProps = {
    dropDownChange: () => {}
  };

  constructor(props) {
    super(props);
    this.dropDownChange = this.dropDownChange.bind(this);
  }

  dropDownChange(event) {
    this.props.dropDownChange(event);
  }

  render() {
    const barStyle = {
      backgroundColor: 'rgba(21, 144, 156, 1)'
    }
 
    return (
      <AppBar className="title-bar" showMenuIconButton={false} style={barStyle} title="Where's The Next Bus?" iconElementRight={<RouteDropDown routeChange={this.dropDownChange} routeOptions={this.props.dropDownOptions}/>}/>
    );
  }
}

export default TitleBar;
