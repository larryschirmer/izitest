import React, { Component } from 'react';
import { string, shape, number, arrayOf } from 'prop-types';
import { Wrapper } from './styles';
import { connect } from 'react-redux';

import Sort from '../Sort';
import Card from '../Card';

class Tray extends Component {
  render() {
    const { data, type, direction } = this.props;

    const sortProps = { data, type, direction, Card };

    return (
      <Wrapper>
        <Sort {...sortProps} />
      </Wrapper>
    );
  }
}

Tray.propTypes = {
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
  type: shape({
    id: string.isRequired,
    text: string.isRequired,
  }),
  direction: shape({
    id: string.isRequired,
    text: string.isRequired,
  }),
};

export function mapStateToProps({ api, ui }) {
  const { data } = api;
  const { type, direction } = ui;
  return { data, type, direction };
}

export default connect(mapStateToProps)(Tray);
