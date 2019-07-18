import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.component';
import NoTaskText from '../containers/NoTaskText';
import { List } from 'react-mdl';

const ListTodo = ({ todos, toggleTodo }) => (
  <List style={{
    width: '300px'
  }}>
    {
      todos.length ? todos.map(todo => 
        <Todo key={todo.id} onClick={() => toggleTodo(todo.id)} text={todo.text} completed={todo.completed} />
      ) : <NoTaskText />
    }
  </List>
)

ListTodo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default ListTodo;