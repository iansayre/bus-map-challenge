const jsonFeed = 'http://webservices.nextbus.com/service/publicJSONFeed?command=';
const sfMuniTag = 'sf-muni';

const ROUTE_CONFIG = `${jsonFeed}routeConfig&a=${sfMuniTag}&r=`;
const ROUTE_LIST = `${jsonFeed}routeList&a=${sfMuniTag}`;
const VEHICLE_LOCATION = `${jsonFeed}vehicleLocations&a=${sfMuniTag}&r=`;

export default {
  ROUTE_CONFIG,
  ROUTE_LIST,
  VEHICLE_LOCATION
}
