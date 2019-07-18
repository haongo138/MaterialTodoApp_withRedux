import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../action';
import { Textfield } from 'react-mdl';

const AddTodo = ({ dispatch }) => {
  return (
    <Textfield autoComplete="off" floatingLabel pattern="^[a-zA-Z0-9 ]*$" error="Invalid input string !!" label="What is your plan?" onKeyUp={
      e => {
        if(e.keyCode === 13) {
          e.preventDefault();
          let validatedString = /^[a-zA-Z0-9 ]*$/.test(e.target.value);
          if(e.target.value.trim() !== '' && validatedString) {
            dispatch(addTodo(e.target.value));
            e.target.value = '';
          }
        }
      }
    }>
    </Textfield>
  )
}

export default connect()(AddTodo);