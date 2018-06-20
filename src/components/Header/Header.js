import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Wrapper, Logo, Navigation } from './styles';
import Button from '../Button';
import { fetchFromAPI, updateType, updateDirection } from '../../reducers/actions';

class Header extends Component {
  state = {
    sortType: 'Sort by Creation Date',
    sortDirection: 'Sort Assending',
    fetchState: 'ready',
  };

  static getDerivedStateFromProps(props, state) {
    if (state === props) return null;

    return {
      fetchState: props.fetchState,
      sortType: props.type.text,
      sortDirection: props.direction.text,
    };
  }

  render() {
    const { sortType, sortDirection, fetchState } = this.state;
    const { fetchFromAPI, updateType, updateDirection } = this.props;

    return (
      <Wrapper>
        <Logo />
        <Navigation>
          <Button label={sortType} handleClick={updateType} />
          <Button label={sortDirection} handleClick={updateDirection} />
          <Button label="Fetch Data" state={fetchState} handleClick={fetchFromAPI} />
        </Navigation>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  fetchState: string.isRequired,
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
  const { fetchState } = api;
  const { type, direction } = ui;
  return { fetchState, type, direction };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchFromAPI: () => dispatch(fetchFromAPI()),
    updateType: () => dispatch(updateType()),
    updateDirection: () => dispatch(updateDirection()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
