import React, { Component } from 'react';

import Calendar from '../calendar';
import TodoDailyList from '../todo-daily-list';

import './app.css'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-between">

          <Calendar />


        </div>
      </div>
      );

  };
};
// <TodoDailyList />
