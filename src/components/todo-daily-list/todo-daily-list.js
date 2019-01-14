import React, { Component } from 'react';

import './todo-daily-list.css';

export default class TodoDailyList extends Component {

  render() {
    return (
      <div className="col-12 col-lg-3">
        <div className="row">
          00:00 - 09:00 : -----
        </div>
        <div className="row">
          09:00 - 18:00 : работать
        </div>
        <div className="row">
          18:00 - 23:59 : -----
        </div>
      </div>
    )
  };

}
