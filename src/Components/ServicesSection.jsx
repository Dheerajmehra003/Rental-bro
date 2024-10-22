import React from 'react'
import Title from './Title'
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';

const ServicesSection = () => {
    const arr = [
        {
            title: '3D Viewer',
            description: 'You can catch the glimpse of room through 3D feature',
            icon: <ViewInArIcon id='ServiceIcon' />
        },
        {
            title: 'Find Roomate ',
            description: 'You can find a roomate who have liking for the same house',
            icon: <GroupIcon id='ServiceIcon' />
        },
        {
            title: 'Rent Room',
            description: 'After selecting the room start the renting process',
            icon: <HomeIcon id='ServiceIcon' />
        },
    ]
  return (
    <>
    <Title title={'The Benefits From Our Service'} subTitle={'--What We Serve--'} />
    <div id='servicesContainer'>
        {arr.map((item, index)=>{
            return(
                <div id='Services'>
                 {item.icon}
               <span id='serviceheading01'>{item.title}</span>
               <span id='serviceheading02'>{item.description}</span>
           </div>
            )
        })}
    </div>
    </> 
  )
}

export default ServicesSection