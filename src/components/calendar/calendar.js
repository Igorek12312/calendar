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
    const { onDaySelected } = this.props

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
        isLastWeek={isLastWeek}
        onDaySelected={(day) => onDaySelected(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth()+1, day)}/>
    );
    });

    return (
      <div className="col-12 col-lg-8">
        <div className="calendar-header">
          { monthNames[currentDate.getMonth()] } { currentDate.getFullYear() }
        </div>
        <div className="row">
          <div className="col-1 col-lg-1">
            <button className="navigate-button btn" height="500px"
              onClick={() => this.prewMonth(currentDate)}>
                &lt;
            </button>
          </div>
          <div className="col-9 col-lg-9">
            {items}
          </div>
          <div className="col-1 col-lg-1">
            <button className="navigate-button btn"
              onClick={() => this.nextMonth(currentDate)}>
                &gt;
            </button>
          </div>
        </div>
      </div>
    );
  };
};
