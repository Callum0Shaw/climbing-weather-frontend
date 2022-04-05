import styled from 'styled-components';
import wave from '../../media/wave.svg';

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  aspect-ratio: 16/9;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${wave});
  z-index: -1;

  p {
    position: absolute;
    bottom: 0;
    color: black;
  }
`;
