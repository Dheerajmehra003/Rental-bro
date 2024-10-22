import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';


const HeroSection = () => {

    const arr = [
        {
            title: '12k+',
            subtitle:'Happy Customers'
        },
        {
            title: '14k+',
            subtitle:'Award Winnigs'
        },
        {
            title: '5k+',
            subtitle:'Premium Product'
        },
    ]
  return (
    <div id='heroContainer'>
        <p id='heroInfo'>
            We help people to getting 
            home & renting with <br />
            good price
        </p>
        <p id='herodetail'>
        The application aims to simplify the process of 
        finding, renting, and managing room rentals
        </p>
        <div id='searchContainer'>
            <LocationOnIcon />
            <span>Search location...</span>
            <button className='btn'>Search</button>
        </div>
        <div id='customerContainer'>
            { arr.map((item, index)=>{
                return(
                    <div key={index} id='containerdiv'>
                    <p id='customers'>{item.title}</p>
                    <p id='customersDetail'>{item.subtitle}</p>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default HeroSection