import React, { Fragment } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import sortData from './sortData';

const Sort = ({ data, type, direction, Card }) => {
  const dataSortedByType = sortData(data, type.id, direction.id);

  return (
    <Fragment>
      {dataSortedByType.map(({ id, name, creationDate }) => (
        <Card key={id} name={name} creationDate={creationDate} />
      ))}
    </Fragment>
  );
};

Sort.propTypes = {
  data: arrayOf(
    shape({
      id: string.isRequired,
      name: shape({
        first: string.isRequired,
        middle: string,
        last: string.isRequired,
      }),
      creationDate: number.isRequired,
    }),
  ),
};

export default Sort;
