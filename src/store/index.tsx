import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';

// router
export const history = createHashHistory();
const routerMiddlewareWithHistory = routerMiddleware(history);

// Store にマウントする
const store = createStore(
  reducers(history),
  compose(applyMiddleware(logger, routerMiddlewareWithHistory))
);

export default store;
