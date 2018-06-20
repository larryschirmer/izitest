import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Loading from '../Loading';

const Button = ({ label, state = 'ready', handleClick }) => {
  const debouncedCB = state === 'ready' ? handleClick : () => {};

  return (
    <Wrapper state={state} onClick={debouncedCB}>
      <span className="label">{label}</span>
      <span className="loading">
        <Loading />
      </span>
    </Wrapper>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  state: PropTypes.string,
};

export default Button;
