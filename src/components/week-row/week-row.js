import React, { Component } from 'react';
import DayCell from '../day-cell';
import './week-row.css';

export default class WeekRow extends Component {


  render() {
    const { onDaySelected } = this.props


    let startEmptyDays = null
    if (this.props.isFirstWeek) {
      const addDays = 7 - this.props.currentWeek.length;
      startEmptyDays = Array(addDays).fill().map(() => {
        return (
          <div className="col border-bottom cal-empty">
          </div>
        )
      });
    };

    let endEmptyDays = null
    if (this.props.isLastWeek) {
      const addDays = 7 - this.props.currentWeek.length;
      endEmptyDays = Array(addDays).fill().map(() => {
        return (
          <div className="col border-bottom cal-empty">
          </div>
        )
      });
    };

    const days = Object.keys(this.props.currentWeek).map((day) => {
      const currDay = this.props.currentWeek[day]
      return (
        <div className="col border-bottom cal-day"
              key={currDay}
              onClick={() => onDaySelected(currDay)}>
            {currDay}
        </div>
      )
    });

    return (
      <div className="row">
        {startEmptyDays}
        {days}
        {endEmptyDays}
      </div>
    )
  }
};
