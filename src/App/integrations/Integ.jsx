import { Avatar, Badge, Button, Card } from 'antd'
import React from 'react'

function Integ(props) {
  return (
    <div>
    <div>

    <h3 style={{fontSize:'1.5vw', margin:'10vh 0vw 1.5vw 2.5vw'}}>{props.head}</h3>
    </div>
   {props.item.map((i)=><>
    <Badge.Ribbon style={{margin:'15px 0px', padding:'5px 10px'}} text="Comming soon" color="volcano">
    <Card  key={i} style={{margin:'10px 0px 15px 0px', flexDirection:'row', backgroundColor:'rgb(240,240,240)', color:'rgb(160,160,160)'}} >
        <div style={{ display:'flex', justifyContent:'space-between',placeItems:'center',}}>
      <span style={{width:'60vw', backgroundColor:'', display:'flex', justifyContent:'start', placeItems:'center'}}>
       <div style={{margin:'0px 10px'}}><Avatar style={{backgroundColor:'rgb(160,160,160)'}} shape='square' size='large' /></div>
       <div>
        <span style={{margin:'0'}}><h3 style={{margin:'0'}}>{i.title}</h3></span>
        <p style={{margin:'0'}}>{i.detail}</p>
       </div>
      </span>
            
      <span>
        {/* <Button type='primary' size='large'>Connect</Button> */}
        </span>
        </div>
    </Card>
    </Badge.Ribbon>
   
   </>
    )}
  </div>
  )
}

export default Integ