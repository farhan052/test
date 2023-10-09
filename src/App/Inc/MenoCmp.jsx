import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined, PieChartTwoTone, PieChartOutlined ,
InteractionOutlined, UserOutlined,
LikeOutlined,BorderOutlined,
AlignLeftOutlined,LinkOutlined} from '@ant-design/icons';
import { Menu } from 'antd';


function MenoCmp(props) {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
    onClick={onClick}
    style={{
      width: 250,
      fontSize:'1.5vw',
      height:'70%',
      marginTop:'5vh',
      display:'flex',
      flexDirection:'column',
      justifyItems:'evenly',
      fontWeight:'650',
      border:'1px solid #fff'
    }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="vertical"
    items={props.items}
  />
  )
}

export default MenoCmp