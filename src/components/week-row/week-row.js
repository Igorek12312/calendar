import React, { Component } from 'react';
import DayCell from '../day-cell';
import './week-row.css';

export default class WeekRow extends Component {


  render() {

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
      return (
        <DayCell day={this.props.currentWeek[day]}/>
        // <div className="col border-bottom cal-day">
        //   {this.props.currentWeek[day]}*
        // </div>
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
