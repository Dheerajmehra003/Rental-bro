import React from 'react'

const Title = ({title, subTitle}) => {
  return (
    <div id='TitleContainer'>
        <span id='FirstHeading'>{title}</span>
        <span id='SecondHeading'>{subTitle}</span>
    </div>
  )
}

export default Title