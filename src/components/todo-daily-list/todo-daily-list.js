import React, { Component } from 'react';

import CalendarApiService from '../../services/calendar-api-service';
import './todo-daily-list.css';

export default class TodoDailyList extends Component {

  calendarApiService = new CalendarApiService();

  state = {
    eventList: null
  };

  componentDidMount() {
    this.calendarApiService
    .getAllEvents()
    .then((eventList) => {
      this.setState({
        eventList
      });
    });
  }

  renderItems(arr) {
    return arr.map(({eventDate, eventText}) => {
      return (
        <div className="event">
          <p>{eventDate}: {eventText}</p>
        </div>
      );
    });
  }

  render() {

    const { eventList } = this.state;

    if (!eventList) {
      return (
        <div className="event">empty</div>
      )
    }

    const items = this.renderItems(eventList);

    return (
      <div className="todo-daily-list list-group col-12 col-lg-4">
        {items}
        <button className="btn btn-outline-secondary btn-sm"
          onClick={() => console.log('click')}>
          New event
        </button>
      </div>
    )
  };

};
