import React, { Component } from 'react';
import WeekRow from '../week-row';

import './calendar.css';

export default class Calendar extends Component {

  state = {
    currentDate: new Date()
  };


  getWeeks = (date) => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysCount = lastDay.getDate();
    let weeks = {};
    let weeksCount = 1;
    let weekDays = [];

    for (var i = 1; i <= daysCount; i++) {
      weekDays.push(i);

      if (new Date(date.getFullYear(), date.getMonth(), i).getDay() === 0) {
        weeks[weeksCount] = weekDays;
        weeksCount++;
        weekDays = [];
      } else if (i === daysCount) {
        weeks[weeksCount] = weekDays;
      };
    };
    return weeks;
  };


  prewMonth = (curDate) => {
    const newDate = new Date(curDate.getFullYear(), curDate.getMonth()-1);
    this.setState({
      currentDate: newDate
    });
  };


  nextMonth = (curDate) => {
    const newDate = new Date(curDate.getFullYear(), curDate.getMonth()+1);
    this.setState({
      currentDate: newDate
    });
  };


  render() {

    const { currentDate } = this.state;

    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    const weeks = this.getWeeks(currentDate);

    const items = Object.keys(weeks).map((week) => {
      const isFirstWeek = (+week === 1) ? true : false;
      const isLastWeek = (+week === Object.keys(weeks).length) ? true : false;

      return (
        <WeekRow
          currentWeek={weeks[week]}
          isFirstWeek={isFirstWeek}
          isLastWeek={isLastWeek}/>
      );
    });


    return (
      <div className="col-12 col-lg-8">
        { monthNames[currentDate.getMonth()] } { currentDate.getFullYear() }
          <button className="btn"
            onClick={() => this.prewMonth(currentDate)}>
              Prew
          </button>
          {items}
          <button className="btn"
            onClick={() => this.nextMonth(currentDate)}>
              Next
          </button>
      </div>
    );
  };
};
