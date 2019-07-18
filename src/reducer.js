import { combineReducers } from 'redux';
import todos from './reducers/todos.reducer';
import visibilityFilter from './reducers/visibilityFilter.reducer';

export default combineReducers({ todos, visibilityFilter });

