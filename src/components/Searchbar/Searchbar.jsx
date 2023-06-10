import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import shortid from 'shortid';
// import { AiOutlineUserAdd } from 'react-icons/ai';
// import { Overlay, ModalContent } from './Modal.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = event => {
    this.setState({ query: event.currentTarget.value.trim() });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({
      query: '',
    });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
  };

  render() {
    const { query } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="search"
            type="text"
            onChange={this.handleInput}
            onKeyDown={this.handleKeyPress}
            value={query}
            required
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
