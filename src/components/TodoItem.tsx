import Axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { storeTodo } from '../actions/TodoAction';
import Todo from '../response_types/Todo';
import store from '../store';

interface Props {
  todo: Todo;
  match: {
    params: {
      id: number;
    };
  };
}

const TodoItem = (props: Props) => {
  useEffect(() => {
    const fetchTodo = async () => {
      const result: AxiosResponse<Todo> = await Axios.get(
        'http://127.0.0.1:3030/todo/' + props.match.params.id
      );
      store.dispatch(storeTodo(result.data));
    };

    fetchTodo();
  }, [props.match.params.id]);
  return <div>{props.todo.name}</div>;
};

const mapStateToProps = (state: any) => {
  return {
    todo: store.getState().todoReducer,
  };
};

export default connect(mapStateToProps)(TodoItem);
