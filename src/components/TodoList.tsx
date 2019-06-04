import * as React from 'react';
import { connect } from 'react-redux';
import Todo from '../response_types/Todo';

interface Props {
  todoList: Todo[];
}

const TodoList = (props: Props) => {
  return <div>hello</div>;
};

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(TodoList);
