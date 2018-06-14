import React from 'react';
import content from '../../data/wayfinderData.js';
import styled from 'styled-components';
import postMessage from '../../utils/postMessage';
import check from '../../assets/check.svg';

const StyledForm = styled.form`
  padding: 1.5rem 3rem 2rem 3.3rem;
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
    margin: 0 1rem 2rem 1rem;
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
    margin: 0.5rem 0rem 2rem 0rem;
  }
`;

const Label = styled.label`
  margin: 0.5rem 0 0.2rem 0;
  font-weight: ${props => props.theme.weight.link};
`;

const Input = styled.input`
outline: none;
padding: 2.5%;
margin: .7rem 0 1.8rem 0;
width: 93%
height: 2rem;
color: ${props => props.theme.color.graydark};
border: none; 
border-radius: 5px
font-size: 1.2rem;
letter-spacing: 1px;

@media (max-width: 420px) {
  font-size: 1rem;
}
&::placeholder  {
  color: ${props => props.theme.color.graylight};
}
&:focus,
&:hover {
  outline: solid 5px;
  outline-color: ${props => props.theme.color.yellow};
}
&:active {
  outline: none;
}
`;
const Dropdown = styled.select`
margin: .7rem 0 1.8rem 0;
width: 98%
height: 3rem;
padding-left: 3px;
color: ${props => props.theme.color.graydark};
font-size: 1.2rem;
letter-spacing: 1px;
border: none;

@media (max-width: 420px) {
  font-size: 1rem;
}

&:focus,
&:hover {
  outline: solid 5px;
  outline-color: ${props => props.theme.color.yellow};
}
&:active {
  outline: none;
}
`;

// TODO form option
const Option = styled.option``;

const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Checkbox = styled.input`
  -webkit-appearance: none;
  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.graydark};
  margin: 0.7rem 1rem 1.8rem 0;
  padding: 2px;
  height: 2rem;
  min-width: 2rem;

  &:focus,
  &:hover {
    outline: solid 5px;
    outline-color: ${props => props.theme.color.yellow};
    transition: outline-color 0.1s linear;
  }
  &:checked {
    background: url(${check});
    background-color: ${props => props.theme.color.white};
  }
`;

const StyledRequired = styled.p`
  margin-left: 3rem;
`;

const StyledAsterisk = styled.span`
  font-size: 2rem;
`;

const Button = styled.button`
  font-weight: ${props => props.theme.weight.body};
  background-color: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.navy};
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 3px;
  border: none;
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 2rem auto 1rem auto;
  &:focus,
  &:hover {
    outline: solid 5px;
    outline-color: ${props => props.theme.color.navy};
    transition: outline-color 0.1s linear;
  }
  &:active {
    outline: solid 3px;
    outline-color: transparent
    transition: outline-color 0.1s linear;
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
      gdpr: false
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

  // TODO could this be made asyncronous?
  handleSubmit = event => {
    event.preventDefault();
    const { clearPath } = this.props; // needed to update state and trigger render of ThankYou view
    const userResponseData = this.generateUserResponseDataFromPath();
    const message = {
      user: this.state,
      responses: userResponseData
    };
    postMessage('/send', message)
      .then(() => clearPath(false))
      .catch(() => clearPath(true));
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Title>
          Request a callback <br />from our Advice Service
        </Title>

        <Label htmlFor="name">
          What is your name?<StyledAsterisk>&#42;</StyledAsterisk>
        </Label>
        <Input
          type="text"
          id="name"
          placeholder="eg. Jane Doe"
          value={this.state.name}
          onChange={this.handleChange}
          autoComplete="off"
          required
        />
        <Label htmlFor="telephone">
          What is your phone number?<StyledAsterisk>&#42;</StyledAsterisk>
        </Label>
        <Input
          type="number"
          id="telephone"
          placeholder="eg. 020 8981 8001"
          value={this.state.telephone}
          onChange={this.handleChange}
          autoComplete="off"
          required
        />
        <Label htmlFor="email">What is your email address?</Label>
        <Input
          type="email"
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

        <Dropdown
          id="source"
          value={this.state.source}
          onChange={this.handleChange}
        >
          <Option value="" disabled>
            Select an option:
          </Option>
          <Option value="Social Services">Social Services</Option>
          <Option value="Word of Mout">Word of mouth</Option>
          <Option value="Internet Search">Internet search</Option>
          <Option value="Other">Other</Option>
        </Dropdown>

        <FlexDiv>
          <Checkbox
            type="checkbox"
            id="gdpr"
            value="checked"
            onChange={this.handleChange}
            required
          />
          <Label htmlFor="gdpr">
            By submitting this form, I agree to my personal information being
            sent to Grandparents Plus for the purposes of contacting me.<StyledAsterisk
            >
              &#42;
            </StyledAsterisk>
          </Label>
        </FlexDiv>

        <StyledRequired>
          {' '}
          <StyledAsterisk>&#42;</StyledAsterisk>starred fields are required
        </StyledRequired>

        <Button type="submit">Submit</Button>
      </StyledForm>
    );
  }
}
