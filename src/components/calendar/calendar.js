import React, { Component } from 'react';
import WeekRow from '../week-row';

import './calendar.css';

export default class Calendar extends Component {

  getWeeks = (date) => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysCount = lastDay.getDate();
    let weeks = {};

    let weeksCount = 1;
    let weekDays = [];
    const startMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    const endMonth = new Date(date.getFullYear(), date.getMonth(), lastDay).getDay()

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

  render() {

    const currentDate = new Date();
    // const currentMonth = currentDate.getMonth();

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
        {items}
      </div>
    );
  };
};
