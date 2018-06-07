import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      telephone: '',
      email: '',
      location: '',
      time: '',
      source: '',
      gdpr: 'unchecked'
    };
  }

  handleChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">What is your name?</label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="telephone">What is your phone number?</label>
          <input
            type="text"
            id="telephone"
            value={this.state.telephone}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="email">What is your email address?</label>
          <input
            type="text"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="location">Town/City you live in:</label>
          <input
            type="text"
            id="location"
            value={this.state.location}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="time">
            What is the best time for us to reach you?
          </label>
          <input
            type="text"
            id="time"
            value={this.state.time}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="source">How did you hear about us?</label>
          <input
            type="text"
            id="source"
            value={this.state.source}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="gdpr">
            By submitting this form, I agree to my personal information being
            sent to Grandparents Plus for the purposes of contacting me.
          </label>
          <input
            type="checkbox"
            id="gdpr"
            value={this.state.gdpr}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
