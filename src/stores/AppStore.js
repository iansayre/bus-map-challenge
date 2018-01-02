import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import actionLogger from '../middlewares/actionLogger';
import RouteReducer from '../reducers/RouteReducer';

let AppStore = createStore(RouteReducer, applyMiddleware(thunk, actionLogger));

export default AppStore;
