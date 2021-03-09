import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { nameCountry } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${nameCountry}`)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    return (
        <div>
            {/* <h3>{nameCountry}</h3> */}
            <h3>{country[0].name}</h3>
            <h3>{country[0].alpha2Code}</h3>
            <h3>{country[0].alpha3Code}</h3>
            <h3>{country[0].capital}</h3>
        </div>
    );
};

export default CountryDetails;