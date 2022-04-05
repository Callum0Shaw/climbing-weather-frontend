import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../../media/background.jpg';
import mobileBackground from '../../media/background-mobile.jpg';

const GlobalStyle = createGlobalStyle`

  html {
    font-family: "Montserrat", sans-serif;
    font-size: 8px;
  }
  body {
    
    margin: 0;
    padding: 0;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: black;
    color: white; 
  }
  @media only screen and (max-width: 767px) {
    background-image: url(${mobileBackground});
  }

  body::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.25);
    z-index: -2;
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
