import React, { useEffect, useState } from 'react'
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,cca3,flags')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

  return (
    <>
    <div>Countries : {countries.length}</div>
      <div className='flex flex-wrap'>{countries.map((country) => 
      (<Country key={country.cca3} country={country} /> )
)}</div>
    </>
  )
}
export default Countries
