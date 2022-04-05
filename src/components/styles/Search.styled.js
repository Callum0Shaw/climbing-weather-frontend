import styled from 'styled-components';
import searchIcon from '../../media/search-location-solid.svg';

export const StyledSearch = styled.form`
  display: flex;
  flex-direction: column;
  margin: 18rem auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;

  h2 {
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 0.15rem;
    margin: 4rem 0;
  }
  .search-bar {
    display: flex;
    padding: 0 2.5rem;
    background-color: white;
    border-radius: 3rem;
    width: 35rem;
    margin: 4rem 0;
    :hover {
      box-shadow: 0 3px 8px rgb(116 116 116 / 80%);
      border-color: rgba(116, 116, 116, 0);
    }
    input {
      line-height: 2rem;
      font-size: 2rem;
      flex: 1;
      margin: 0;
      padding: 1.5rem 0;
      font-family: 'Montserrat';
      outline: none;
      border: none;
      text-align: center;
      background-image: url(${searchIcon});
      background-repeat: no-repeat;
      background-size: 2rem;
      background-position: 0rem 1.7rem;
    }
    button {
      background: none;
      color: black;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      font-size: 2rem;
    }
  }
  .invalid {
    box-shadow: 0 5px 8px rgb(255 101 47/ 90%) !important;
    border: 1px solid #ff652f !important;
  }
`;
