import React from 'react';
import PropTypes from 'prop-types';
import { Container, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Container>
      Find contacts by name →
      <FilterInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
      ></FilterInput>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
