import React, { Component } from 'react';

import './day-cell.css';

export default class DayCell extends Component {

  render() {
    const { day, onDaySelected } = this.props
    return (
      <div className="col border-bottom cal-day"
           key={day}
           onClick={() => onDaySelected(day)}>
        {day}
      </div>
    )
  };
};
