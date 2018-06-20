import styled from 'styled-components';

const READY = 'ready';
const LOADING = 'loading';

const generalStyle = `
  height: 34px;
  color: #eee;
  background: #999;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  user-select: none;
  transition: width 0.3s ease;
  position: relative;
  
  span {
    position: absolute;
  }

  span.loading {
    top: 7px;
  }

  cursor: not-allowed;
`;

const ready = `
  ${generalStyle}
  
  width: 200px;
  border-radius: 10px;
  cursor: pointer;

  > .label {
    opacity: 1;
    transition: opacity 0.2s 0.3s ease;
   }

  > .loading {
   opacity: 0;
   transition: opacity 0.1s 0s ease;
  }
`;

const loading = `
  ${generalStyle}
  
  width: 34px;
  border-radius: 17px;

  > .label {
    opacity: 0;
    transition: opacity 0.1s 0s ease;
   }

  > .loading {
    opacity: 1;
    transition: opacity 0.2s 0.3s ease;
  }
`;

const disabled = `
  ${generalStyle}

  width: 200px;
  color: #555;
`;

export const Wrapper = styled.div`
  ${({ state }) => (state === READY ? ready : state === LOADING ? loading : disabled)};
`;
