/* Routes Reducer */

import RouteActions from '../actions/RouteActions';

const initialState = {
  isFetchingRoutes: false,
  routes: {},
  vehicleRoute: {},
  vehicleLocation: {},
  vehicleLocationArray: []
}

function RouteReducer(state = initialState, action = null) {
  switch(action.type) {
    case RouteActions.POPULATE_LOCATION_ARRAY:
      return Object.assign({}, state, {
        vehicleLocationArray: action.payload
      });
    case RouteActions.REQUEST_ROUTES:
      return Object.assign({}, state, {
        isFetchingRoutes: true
      });
    case RouteActions.RECEIVE_ROUTES:
      return Object.assign({}, state, {
        isFetchingRoutes: action.payload.isFetching,
        routes: action.payload.routes
      });
    case RouteActions.RECEIVE_VEHICLE_LOCATION:
      return Object.assign({}, state, {
        vehicleLocation: action.payload
      });
    case RouteActions.SET_ROUTE:
      return Object.assign({}, state, {
        vehicleRoute: action.payload
      });
    default:
      return state;
  }
}

export default RouteReducer;
