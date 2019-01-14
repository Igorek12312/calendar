import React, { Component } from 'react';

import Calendar from '../calendar';
import TodoDailyList from '../todo-daily-list';

import './app.css'

export default class App extends Component {
  render() {
    return (
      <span className="container">
        <div className="row justify-content-between">

          <div className="col-12 col-lg-8">
            <Calendar />
          </div>

          <div className="col-12 col-lg-3">
            <TodoDailyList />
          </div>

        </div>
      </span>
      );

  };
};
