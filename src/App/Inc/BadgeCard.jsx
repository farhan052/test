import React,{useState} from 'react'
import { Avatar, Badge, Card, Space, Switch } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined, PieChartTwoTone, PieChartOutlined ,
    InteractionOutlined, UserOutlined,
    LikeOutlined,BorderOutlined,
    AlignLeftOutlined,LinkOutlined, UserAddOutlined} from '@ant-design/icons';
function BadgeCard() {
    const [show, setShow] = useState(true);
    const onChange = (checked) => {
        setShow(checked);
      };
    const card =[
        {title:'zoom'},
        // {title:'youtube'},
        // {title:'Google'}
    ];
  return (<>
<Space size="large">
    <div>
        
    <Switch onChange={onChange} checked={show} />
    </div>
    
<div>

    {
        card.map((i)=> 
        <>
        <Badge key={i} style={{margin:'5px', border:'2px solid #ff'}} dot={show}>
        {/* <Avatar shape="square" size="large" ><UserAddOutlined/></Avatar> */}
        <div style={{display:'flex', height:'33vh'}} >
            <div style={{backgroundColor:'red', width:'16vw', height:'50%', borderRadius:'15px' }}>

            </div>

        </div>
         </Badge>
     </>

)
}

</div>
    </Space>
    </>
  )
}

export default BadgeCard