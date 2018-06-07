import React from 'react';
import content from '../../data/wayfinderData.js';

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

  // Loops through the usersPath using the next key in the array as a reference to generate the original
  // Question and Answer from the Wayfinder content data object
  // Returns array of Question and Answer objects (eliminating 'continue' answers)
  generateUserResponseDataFromPath = () => {
    const path = this.props.usersPath;
    let userResponseData = [];
    path.map((key, i) => {
      let nextKey = path[i + 1];
      let options = content[key].options || null;
      if (options !== null && options.length > 1) {
        let userAnswer = options.filter(option => {
          if (option.goto === nextKey) {
            return option.answer;
          }
        })[0].answer;
        userResponseData.push({
          question: content[key].question,
          answer: userAnswer
        });
      }
    });

    return userResponseData;
  };

  handleChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userResponseData = this.generateUserResponseDataFromPath();
    //TODO state and userResponseData needs to be sent to the server.
    console.log(this.state, userResponseData);
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
          />
          <label htmlFor="telephone">What is your phone number?</label>
          <input
            type="text"
            id="telephone"
            value={this.state.telephone}
            onChange={this.handleChange}
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
          />
          <label htmlFor="time">
            What is the best time for us to reach you?
          </label>
          <input
            type="text"
            id="time"
            value={this.state.time}
            onChange={this.handleChange}
          />
          <label htmlFor="source">How did you hear about us?</label>
          <input
            type="text"
            id="source"
            value={this.state.source}
            onChange={this.handleChange}
          />
          <label htmlFor="gdpr">
            By submitting this form, I agree to my personal information being
            sent to Grandparents Plus for the purposes of contacting me.
          </label>
          <input
            type="checkbox"
            id="gdpr"
            value="checked"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
