import React, { Component } from 'react';

import Calendar from '../calendar';
import TodoDailyList from '../todo-daily-list';

import './app.css'

export default class App extends Component {
  day = '0' + new Date().getDate()
  month = '0' + new Date().getMonth()+1
  defaultDate = `${new Date().getFullYear()}-${this.month.slice(-2)}-${this.day.slice(-2)}`
  state = {
    selectedDate: this.defaultDate
  };

  onDaySelected = (year, month, day) => {
    day = '0' + day
    month = '0' + month
    this.setState({
      selectedDate: `${year}-${month.slice(-2)}-${day.slice(-2)}`
    })
  };

  render() {

    return (
      <div className="container">
        <div className="row justify-content-between">

          <Calendar day={this.state.selectedDate}
                    onDaySelected={ this.onDaySelected }/>
          <TodoDailyList day={this.state.selectedDate}/>
        </div>
      </div>
      );

  };
};
