/* Route Actions */

import fetch from 'isomorphic-fetch';

const POPULATE_LOCATION_ARRAY  = 'POPULATE_LOCATION_ARRAY';
const REQUEST_ROUTES           = 'REQUEST_ROUTES';
const RECEIVE_ROUTES           = 'RECEIVE_ROUTES';
const REQUEST_VEHICLE_LOCATION = 'REQUEST_VEHICLE_LOCATION';
const RECEIVE_VEHICLE_LOCATION = 'RECEIVE_VEHICLE_LOCATION';
const SET_ROUTE                = 'SET_ROUTE';


function populateLocationArray(array) {
  return {
    type: POPULATE_LOCATION_ARRAY,
    payload: array
  }
}

function requestRoutes(url) {
  return {
    type: REQUEST_ROUTES,
    payload: url
  }
}

function receiveRoutes(json) {
  return {
    type: RECEIVE_ROUTES,
    payload: {
      isFetchingRoutes: false,
      routes: json
    }
  }
}

function requestVehicleLocation(url) {
  return {
    type: REQUEST_VEHICLE_LOCATION,
    payload: url
  }
}

function receiveVehicleLocation(json) {
  return {
    type: RECEIVE_VEHICLE_LOCATION,
    payload: json
  }
}

function setRoute(route) {
  return {
    type: SET_ROUTE,
    payload: route
  }
}

function fetchRoutes(url){
  return dispatch => {
    dispatch(requestRoutes(url));
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveRoutes(json)))
  }
}

function shouldFetchRoutes(state) {
  const routes = state.routes;

  if (!routes[0]) {
    return true;
  }

  if (state.isFetchingRoutes) {
    return false;
  }

  return;
}

function fetchRoutesIfNeeded(url) {
  return (dispatch, getState) => {
    if (shouldFetchRoutes(getState(), url)) {
      return dispatch(fetchRoutes(url));
    }
  }
}

function fetchVehicleLocation(url) {
  return dispatch => {
    dispatch(requestVehicleLocation(url));
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveVehicleLocation(json)))
  }
}

export default {
  POPULATE_LOCATION_ARRAY,
  REQUEST_ROUTES,
  RECEIVE_ROUTES,
  REQUEST_VEHICLE_LOCATION,
  RECEIVE_VEHICLE_LOCATION,
  SET_ROUTE,
  fetchRoutes,
  fetchRoutesIfNeeded,
  fetchVehicleLocation,
  populateLocationArray,
  requestRoutes,
  receiveRoutes,
  requestVehicleLocation,
  receiveVehicleLocation,
  setRoute,
  shouldFetchRoutes
}
