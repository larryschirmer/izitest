import styled from 'styled-components';

export const Wrapper = styled.img`
  width: 20px;
  height: 20px;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  animation: spinner 0.9s linear infinite;
`;
