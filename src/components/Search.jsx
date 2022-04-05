import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledSearch } from './styles/Search.styled';

function Search({ findDryCrag }) {
  const [postcode, setPostcode] = useState('');
  const [isValid, setIsValid] = useState(true);

  const history = useHistory();
  const isPostcodeValid = () => {
    if (!postcode) {
      return false;
    }
    // regex to validate postcode from https://andrewwburns.com/2018/04/10/uk-postcode-validation-regex/
    const postcodeRegex = new RegExp(
      '^(([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))) ?[0-9][A-Z]{2}$'
    );

    if (postcodeRegex.test(postcode.toUpperCase())) {
      return true;
    }

    return false;
  };

  const normaliseInput = (value) => {
    if (!value) return value;
    const trimmedValue = value.trimStart().toUpperCase();
    return trimmedValue;
  };

  const handleChange = (e) => {
    setIsValid(true);
    const { value } = e.target;
    const normalisedValue = normaliseInput(value);
    setPostcode(normalisedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isPostcodeValid(postcode)) {
      findDryCrag(postcode, history);
    } else {
      setIsValid(false);
    }
  };
  return (
    <StyledSearch onSubmit={handleSubmit}>
      <h2>Find your nearest dry crag</h2>
      <div className={isValid ? 'search-bar' : 'search-bar invalid'}>
        <input
          name="search"
          type="text"
          value={postcode}
          autoFocus
          placeholder="Enter Postcode"
          onChange={handleChange}
        />
        <button className="submit" type="submit">
          Search
        </button>
      </div>
    </StyledSearch>
  );
}

export default Search;
