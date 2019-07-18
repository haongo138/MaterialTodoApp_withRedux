import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemContent, ListItemAction, Switch } from 'react-mdl';

const Todo = ({ onClick, completed, text }) => (
  <ListItem>
    <ListItemContent 
        style={{
            textDecoration: completed ? 'line-through' : 'none',
            opacity: completed ? 0.5 : 1
        }}
    > 
      {text} 
    </ListItemContent>
    <ListItemAction>
      <Switch onClick={onClick} />
    </ListItemAction>
  </ListItem>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;