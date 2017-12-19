import React from 'react';
import ReactDOM from 'react-dom';
import AddStudentForm from './../AddStudentForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddStudentForm />, div);
});