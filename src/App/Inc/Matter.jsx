import { Button, Card, Select, Space } from 'antd'
import React from 'react'
import { DownOutlined, AppstoreOutlined,
     RedoOutlined, VerticalAlignBottomOutlined} from '@ant-design/icons';
import BadgeCard from './BadgeCard';
function Matter() {
    const options = [
        {
          value: '',
          label: '',
        },
       
      ];
      const card =[
        {
            icon:<RedoOutlined />
        },
        {
            icon:<VerticalAlignBottomOutlined />
        }
      ]
   const button =[
    {title :' '},
    {title :' '},
    {title :' '},
    {title :' '},
   ]
  return (
    <div style={{width:'80%',backgroundColor:'transparent' , margin: '10vh 10vw'}} >
    <h1>Applications</h1>
    <div style={{display:'flex', justifyContent:'space-between'}}>
    <span style={{width:'50%'}}>Missing on a Subscription below? You could Always Manually Add missing Subscriptions you are looking to manage</span>
    <span style={{}}>
        <Button type="primary" icon={<AppstoreOutlined/>} size='large'>
            Add Applications
          </Button>
          </span>
    </div>
    <div style={{display:'flex', justifyContent:'space-between', marginTop:'7vw'}}>

    <Space wrap>
        {button.map((i)=> <Select style={{width:'7vw'}} options={options} />)}
    </Space>
    <Space wrap>
   {card.map((i)=> <Button type="primary" icon={i.icon} size='large' />)}
    </Space>
    </div>
<div>
    <BadgeCard/>
</div>

    </div>
  )
}

export default Matter