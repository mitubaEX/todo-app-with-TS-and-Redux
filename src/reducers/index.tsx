import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import Todo from '../response_types/Todo';
import TodoReducer from './TodoReducer';

interface CombineState {
  todoReducer: Todo;
  router: any;
}

const reducers = (history: any) =>
  combineReducers<CombineState>({
    todoReducer: TodoReducer,
    router: connectRouter(history),
  });

export default reducers;
