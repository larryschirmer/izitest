import React from 'react';
import { Wrapper } from './styles';
import spinner from './spinner.svg';

const Loading = () => <Wrapper src={spinner} alt="loading spinner" />;

export default Loading;
