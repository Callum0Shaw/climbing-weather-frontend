import styled from 'styled-components';

export const StyledCragInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16rem auto;
  text-align: center;
  font-size: 2rem;

  .header {
    margin: 2rem;
  }

  img {
  }
  h2 {
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 0.15rem;
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 3rem;
    font-weight: 500;
    line-height: 5rem;
  }
  #weather-description {
    text-transform: capitalize;
  }
  button,
  a {
    margin: 2rem;
    text-decoration: underline;
    color: white;
    background: none;
    border: none;
    padding: 1rem 2rem;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    font-size: 3rem;
    :hover {
      color: #f8f8f8;
    }
  }
`;
