import React from 'react';
import content from '../../data/wayfinderData.js';
import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 1.5rem 3rem 2rem 3rem;
  margin: 0 2rem 0 2rem;
  background-color: ${props => props.theme.color.orange};
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.color.white};
  font-weight: ${props => props.theme.weight.light};
  font-size: 1.2rem;
  letter-spacing: 1px;
  @media (max-width: 420px) {
    font-size: 1rem;
    padding: 1.5rem 1.5rem 2rem 1.5rem;
  }
`;
const Title = styled.h1`
  color: ${props => props.theme.color.white};
  font-weight: ${props => props.theme.weight.body};
  text-align: center;
  font-size: 1.5rem;

  margin: 0.5rem 0rem 1.5rem 0rem;
  @media (max-width: 420px) {
    font-size: 1.2rem;
    font-size: 1.2rem;
    letter-spacing: 1px;
    @media (max-width: 420px) {
      font-size: 1rem;
      padding: 1rem 1rem 1rem 1rem;
    }
  }
`;
const Label = styled.label`
  margin: 0.5rem 0 0.2rem 0;
`;
const Input = styled.input`
outline: none;
padding: ${props => (props.checkbox ? '.0%' : '2.5%')}
margin: ${props => (props.checkbox ? '.7rem 0 1.8rem 0;' : '.7rem 0 1.8rem 0;')}
width: 93%
height: 2rem;
color: ${props => props.theme.color.graydark};
border: solid 5px transparent; 
border-radius: 3px;
font-size: ${props => (props.checkbox ? '3rem' : '1.2rem')}
letter-spacing: 1px;

@media (max-width: 420px) {
  font-size: 1rem;
}

&::placeholder  {
  color: ${props => props.theme.color.graylight};
}

&:focus { 
  border: solid 5px; 
  border-color: ${props => props.theme.color.yellow};
  transition: border-color 0.3s ease-in-out;
}
`;

// display: ${props => (props.checkbox ? 'inline-block' : 'inline-block')};
const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Button = styled.button`
  font-weight: ${props => props.theme.weight.body};
  background-color: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.navy};
  border: 0;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 3px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  border: solid 3px transparent;
  text-transform: uppercase;
  margin: 2rem 0rem 1rem 0rem;
  &:focus {
    outline: none;
    border: solid 3px;
    border-color: ${props => props.theme.color.navy};
    transition: border-color 0.3s ease-in-out;
  }
`;

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
    const { clearPath } = this.props;
    event.preventDefault();

    const userResponseData = this.generateUserResponseDataFromPath();
    // TODO state and userResponseData needs to be sent to the server.
    clearPath();
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Title>
          Request a callback <br />from our Advice Service
        </Title>
        <Label htmlFor="name">What is your name?</Label>
        <Input
          type="text"
          id="name"
          placeholder="eg. Jane Doe"
          value={this.state.name}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <Label htmlFor="telephone">What is your phone number?</Label>
        <Input
          type="text"
          id="telephone"
          placeholder="eg. 0700000000"
          value={this.state.telephone}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <Label htmlFor="email">What is your email address?</Label>
        <Input
          type="text"
          id="email"
          placeholder="eg. jane@email.com"
          value={this.state.email}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <Label htmlFor="location">Town/City you live in:</Label>
        <Input
          type="text"
          id="location"
          placeholder="eg. Liverpool or L3 2AA"
          value={this.state.location}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <Label htmlFor="time">
          What is the best time Mon - Fri between 10am-3pm for us to reach you?
        </Label>
        <Input
          type="text"
          id="time"
          placeholder="eg. Mornings"
          value={this.state.time}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <Label htmlFor="source">How did you hear about us?</Label>
        <Input
          type="text"
          id="source"
          placeholder="eg. dropdown"
          value={this.state.source}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <FlexDiv>
          <Input
            checkbox
            type="checkbox"
            id="gdpr"
            value="checked"
            onChange={this.handleChange}
          />
          <Label htmlFor="gdpr">
            By submitting this form, I agree to my personal information being
            sent to Grandparents Plus for the purposes of contacting me. &#42;
            <span style={{ fontStyle: 'italic' }}>required</span>
          </Label>
        </FlexDiv>

        <Button type="submit">Submit</Button>
      </StyledForm>
    );
  }
}
