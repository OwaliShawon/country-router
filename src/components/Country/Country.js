import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const { name, capital, nativename, population, region, flag } = props.country;
    const countryStyle = {
        border: '3px solid green',
        margin: '5px',
        padding: '5px',
        // backgroundImage: `url('${flag}')`,
        // backgroundRepeat: 'no-repeat'
    }

    const history = useHistory();
    const handleClick = (nameCountry) => {
        history.push(`/country/${nameCountry}`)
    }

    return (
        <div style={countryStyle}>
            <h1>Country {name}</h1>
            <h2>Region: {region}</h2>
            <h3>Capital: {capital}</h3>
            <p>Native Name: {nativename}</p>
            <p>Population: {population}</p>
            {/* <Link to={`/country/${name}`}>Details</Link> */}
            <button onClick={() => handleClick(name)}>DETAILS</button>
        </div>
    );
};

export default Country;