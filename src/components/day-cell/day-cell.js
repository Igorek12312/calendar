import React, { Component } from 'react';

import './day-cell.css';

export default class DayCell extends Component {

  // const day = this.props.day

  render() {
    return (
      <div className="col border-bottom cal-day">
        {this.props.day}
      </div>
    )
  };
};
