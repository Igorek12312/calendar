export default class CalendarApiService {

  _apiBase = 'http://localhost:8000';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json();
  };

  getAllEvents = async () => {
    const res = await this.getResource(`/event/`);
    return res.map(this._transformEvent);
  };


  _transformEvent = (event) => {
    return {
      eventDate: event.event_date,
      eventText: event.event_text
    }
  }


};
