import React, { Component } from 'react';

import './calendar.css';

export default class Calendar extends Component {

  getWeeks = (date) => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysCount = lastDay.getDate();
    let weeks = {}

    let weeksCount = 1;
    let weekDays = [];
    for (var i = 1; i <= daysCount; i++) {
      weekDays.push(i);

      if (new Date(date.getFullYear(), date.getMonth(), i).getDay() === 6) {
        // alert(weekDays);

        weeks[weeksCount] = weekDays;

        weeksCount++;
        weekDays = [];
      } else if (i === daysCount) {
        weeks[weeksCount] = weekDays;
      }
    };
    return weeks
  };

  render() {

    const currentDate = new Date;
    const currentMonth = currentDate.getMonth()

    console.log(this.getWeeks(currentDate))

    // const weeksCount =
    // return (
    //   <div className="col-12 col-lg-8">
    //
    //   </div>
    // )
    return (
      <div className="col-12 col-lg-8">
        <div className="row">
          <div className="col border-bottom cal_title">
            пн
          </div>
          <div className="col border-bottom cal_title">
            вт
          </div>
          <div className="col border-bottom cal_title">
            ср
          </div>
          <div className="col border-bottom cal_title">
            чт
          </div>
          <div className="col border-bottom cal_title">
            пт
          </div>
          <div className="col border-bottom cal_title">
            сб
          </div>
          <div className="col border-bottom cal_title">
            вс
          </div>
        </div>
        <div className="row">
          <div className="col border-bottom cal_day">

          </div>
          <div className="col border-bottom cal_day">

          </div>
          <div className="col border-bottom cal_day">

          </div>
          <div className="col border-bottom cal_day">
            1
          </div>
          <div className="col border-bottom cal_day">
            2
          </div>
          <div className="col border-bottom cal_day">
            3
          </div>
          <div className="col border-bottom cal_day">
            4
          </div>
        </div>
        <div className="row">
          <div className="col border-bottom cal_day">
            5
          </div>
          <div className="col border-bottom cal_day">
            6
          </div>
          <div className="col border-bottom cal_day">
            7
          </div>
          <div className="col border-bottom cal_day">
            8
          </div>
          <div className="col border-bottom cal_day">
            9
          </div>
          <div className="col border-bottom cal_day">
            10
          </div>
          <div className="col border-bottom cal_day">
            11
          </div>
        </div>
        <div className="row">
          <div className="col border-bottom cal_day">
            12
          </div>
          <div className="col border-bottom cal_day">
            13
          </div>
          <div className="col border-bottom cal_day">
            14
          </div>
          <div className="col border-bottom cal_day">
            15
          </div>
          <div className="col border-bottom cal_day">
            16
          </div>
          <div className="col border-bottom cal_day">
            17
          </div>
          <div className="col border-bottom cal_day">
            18
          </div>
        </div>
        <div className="row">
          <div className="col border-bottom cal_day">
            19
          </div>
          <div className="col border-bottom cal_day">
            20
          </div>
          <div className="col border-bottom cal_day">
            21
          </div>
          <div className="col border-bottom cal_day">
            22
          </div>
          <div className="col border-bottom cal_day">
            23
          </div>
          <div className="col border-bottom cal_day">
            24
          </div>
          <div className="col border-bottom cal_day">
            25
          </div>
        </div>
        <div className="row">
          <div className="col border-bottom cal_day">
            26
          </div>
          <div className="col border-bottom cal_day">
            27
          </div>
          <div className="col border-bottom cal_day">
            28
          </div>
          <div className="col border-bottom cal_day">
            29
          </div>
          <div className="col border-bottom cal_day">
            30
          </div>
          <div className="col border-bottom cal_day">

          </div>
          <div className="col border-bottom cal_day">

          </div>
        </div>
      </div>
    )
  };

};
