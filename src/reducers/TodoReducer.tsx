import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { storeTodo } from '../actions/TodoAction';
import Todo, { TodoImpl as TodoImplResponse } from '../response_types/Todo';

const initialState = new TodoImplResponse('', false);

const reducer = (state: Todo = initialState, action: Action): Todo => {
  if (isType(action, storeTodo)) {
    return action.payload;
  }
  return state;
};

export default reducer;
