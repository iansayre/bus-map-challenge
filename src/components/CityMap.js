import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { json } from 'd3-request';
import * as d3Geo from 'd3-geo';

class CityMap extends Component {
  static propTypes = {
    minHeight: PropTypes.number.isRequired,
    minWidth: PropTypes.number.isRequired,
    maxHeight: PropTypes.number,
    maxWidth: PropTypes.number
  };
  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    const { minHeight, minWidth } = this.props;

    const cityProjection = d3Geo.geoMercator();
    const cityPath = d3Geo.geoPath().projection(cityProjection);

    let streetRender = json('../utils/sfmaps/streets.json', function(error, geoData) {
      return (
        <g className="street">
          <path d={geoData} />
        </g>
      );
    })
    return(
      <svg className="sf-map" height={minHeight} width={minWidth}>
        {streetRender}
      </svg>
    );
  }
}

export default CityMap;


