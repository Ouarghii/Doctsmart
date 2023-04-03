import React from 'react'
import Card from './Card'
import Card1 from './Card1'
import Card2 from './Card2'

const Cards = () => {
  return (
    <div className='container-fluid d-flex justify-content-center'>
         <div style={{textAlign:'center'}}>
      <h3>Login Space</h3>
      <h1 style={{color:'black'}}><span style={{fontFamily:'bold', color:'blue'}}>Professional & </span> Enthusiastic</h1>
      
        <div className='row' >
            <div className='col-md-4 '>
                <Card />
            </div>
            <div className='col-md-4'  >
                <Card1 />
            </div>
            <div className='col-md-4' >
                <Card2 />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cards