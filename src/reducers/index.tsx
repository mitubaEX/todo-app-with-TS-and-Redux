import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

interface CombineState {
  router: any;
}

const reducers = (history: any) =>
  combineReducers<CombineState>({
    router: connectRouter(history),
  });

export default reducers;
