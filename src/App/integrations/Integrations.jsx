import { Avatar, Button, Card, Space, Tag } from 'antd'
import React from 'react'
import {  UserSwitchOutlined, AppstoreOutlined } from '@ant-design/icons';

function Integrations(props) {
  return (
    <>
  
      <div>
        <div>

        <h3 style={{fontSize:'1.5vw', margin:'10vh 0vw 1.5vw 2.5vw'}}>{props.head}</h3>
        </div>
       {props.item.map((i)=><>
      

        <Card key={i} style={{margin:'10px 0px 15px 0px', flexDirection:'row'}} >
            <div style={{ display:'flex', justifyContent:'space-between',placeItems:'center',}}>
          <span style={{width:'60vw', backgroundColor:'', display:'flex', justifyContent:'start', placeItems:'center'}}>
           <div style={{margin:'0px 10px'}}><Avatar shape='square' size='large' /></div>
           <div>
            <span style={{margin:'0', display:'flex'}}><h3 style={{margin:'0px 2px'}}>{i.title}</h3>
             <Tag color="processing" style={{margin:'0px .3vw', padding:'0px 5px', fontSize:'1vw'}}  >
             <AppstoreOutlined style={{margin:'0'}}/> <UserSwitchOutlined style={{margin:'0'}}/>
    </Tag>
    </span>
            <p style={{margin:'0'}}>{i.detail}</p>
           </div>
          </span>
                
          <span><Button type='primary' size='large'>Connect</Button></span>
            </div>
        </Card>
       
    
       </>
        )}
      </div>
    
      </>
  )
}

export default Integrations