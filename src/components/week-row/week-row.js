import React, { Component } from 'react';

import './week-row.css';

export default class WeekRow extends Component {


  render() {

    let startEmptyDays = null
    if (this.props.isFirstWeek) {
      const addDays = 7 - this.props.currentWeek.length;
      startEmptyDays = Array(addDays).fill().map(() => {
        return (
          <div className="col border-bottom cal_day">
          </div>
        )
      });
    };

    let endEmptyDays = null
    if (this.props.isLastWeek) {
      const addDays = 7 - this.props.currentWeek.length;
      console.log(addDays)
      endEmptyDays = Array(addDays).fill().map(() => {
        return (
          <div className="col border-bottom cal_day">
          </div>
        )
      });
    };

    const days = Object.keys(this.props.currentWeek).map((day) => {
      return (
        <div className="col border-bottom cal_day">
          {this.props.currentWeek[day]}
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
