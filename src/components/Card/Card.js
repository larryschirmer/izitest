import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Name, Date } from './styles';
import { combineName, formatDate } from '../../reducers/helperFunctions';

const Card = ({ name, creationDate }) => {
  const combinedName = combineName(name);
  const formatedDate = formatDate(creationDate);

  return (
    <Wrapper>
      <Name>{combinedName}</Name>
      <Date>{formatedDate}</Date>
    </Wrapper>
  );
};

Card.propTypes = {
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    middle: PropTypes.string,
    last: PropTypes.string.isRequired,
  }),
  creationDate: PropTypes.number.isRequired,
};

export default Card;
