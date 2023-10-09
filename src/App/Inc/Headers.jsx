import { Col, Row } from 'antd'
import React from 'react'

function Headers() {
  const logoStyle ={
    width :'20vw',
    border: '1px solid #fff',
    textAlign: 'center',
    borderRadius :'1px ',
    margin: '0',
     color: 'rgb(2,2,2)',
    // padding :'0px 0px 20px 30px',
    fontSize : '2.2vw',
    backgroundColor :'#fff'

    
  }
  return (
    <>
   <h1 style={logoStyle}>
    <i>
    Forscribe
    </i> 
    </h1>
    </>
  )
}

export default Headers