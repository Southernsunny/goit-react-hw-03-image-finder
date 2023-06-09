import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Container, Label, Input, BtnAdd } from './Form.styled';

class Form extends Component {
  state = { name: '', number: '' };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name..."
            id={this.nameInputId}
          />
        </Label>
        <Label htmlFor={this.numberInputId}>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="+380..."
            id={this.numberInputId}
          />
        </Label>
        <BtnAdd type="submit">
          Add contact
          <AiOutlineUserAdd />
        </BtnAdd>
      </Container>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
