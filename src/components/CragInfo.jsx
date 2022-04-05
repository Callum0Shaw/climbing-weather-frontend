import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledCragInfo } from './styles/CragInfo.styled';
import img from '../media/weather/801.svg';

function CragInfo({ crag }) {
  const [moreInfo, setMoreInfo] = useState(false);

  const toggleMoreInfo = (e) => {
    e.preventDefault();
    setMoreInfo(!moreInfo);
  };

  return (
    <StyledCragInfo className="crag-info">
      <div className="header">
        <img src={img} alt="Weather Icon" />
        <h2>{crag.name}</h2>
      </div>

      <ul>
        <li id="weather-description">{crag.weather.description}</li>
        <li>{Math.round(crag.distance)} miles</li>
      </ul>
      {moreInfo ? (
        <div>
          <ul>
            <li>Climbs: {crag.climbs}</li>
            <li>Rock type: {crag.rock_type}</li>
            <li>Faces: {crag.faces}</li>
          </ul>
          <button type="button" className="more-info" onClick={toggleMoreInfo}>
            Hide
          </button>
        </div>
      ) : (
        <button type="button" className="more-info" onClick={toggleMoreInfo}>
          More info...
        </button>
      )}
      <Link to="/">Back</Link>
    </StyledCragInfo>
  );
}

export default CragInfo;
