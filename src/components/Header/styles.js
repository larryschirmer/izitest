import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  min-width: 750px;
  max-width: 900px;
  height: 50px;
  margin: 10px auto;
  background: #ddd;
  border-radius: 5px;
`;

export const Logo = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;

  grid-column: 1/2;
  margin: auto;
`;

export const Navigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  height: 100%;
  width: 100%;
  grid-column: 2/3;
`;
