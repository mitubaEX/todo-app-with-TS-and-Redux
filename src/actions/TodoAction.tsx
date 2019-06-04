import actionCreatorFactory from 'typescript-fsa';
import Todo from '../response_types/Todo';

const actionCreator = actionCreatorFactory();

export const storeTodo = actionCreator<
  Todo // success type
>('STORE');
