
import React from 'react'
import { Layout, Space ,Input, Button, Badge, Avatar, FloatButton} from 'antd';
import Headers from '../Inc/Headers';
import {
 ArrowLeftOutlined, SearchOutlined,
 UserAddOutlined, BellOutlined,
 QuestionCircleOutlined,
 MessageOutlined
} from '@ant-design/icons';
import MenoCmp from '../Inc/MenoCmp';
import { Accounting, Engagement, SignOn, items, items1, items2 } from './item';
import BadgeCard from '../Inc/BadgeCard';
import Profile from '../Inc/Profile';
import Matter from '../Inc/Matter';
import Integrations from '../integrations/Integrations';
import Integ from '../integrations/Integ';

// import type { SearchProps } from '../Search';
const { Header, Footer, Sider, Content } = Layout;
function Home() {
  const { Search } = Input;
  const onSearch= (value, _e, info) => console.log(info?.source, value);
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1677ff',
//     }}
//   />)
  const headerStyle = {
    display : 'flex',
    padding :0,
    color: '#fff',
    // height: '10vh',
    // paddingInline: 50,
    // lineHeight: '10vh',
    backgroundColor: '#fff',
    justifyContent :'',
    alignItem :'center',
    
    borderBottom : '1px solid  rgb(220,220,220)',

  };
  const contentStyle = {
    // textAlign: 'center',
    display: 'flex',
    width :'50px',
  //  lineHeight: '250vh',
    // color: 'red',
    backgroundColor: '#fff',
    // justifyContent:'space-evenly',
    
    // margin:'30px 10px'
  };
  const siderStyle = {
    // textAlign: 'center',
    lineHeight: '200vh',
    width :'20vw',
    color: '#000',
    margin :'0',
    padding:'5px',
    backgroundColor:'#fff',
    
    
    // padding :'0px 10px 0px 0px',
    // backgroundColor: '#3ba0e9',
    borderRight :' 1px solid rgb(220,220,220) '
  };
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
    height :'10vh',
    
  };
  return (<>
  <Space
    direction="vertical"
    style={{
      width: '100%',
      height:'250vh'
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>
        <Headers />
        <div style={{backgroundColor:'#fff', width:'80vw', display:'flex', justifyContent:'space-between', alignItem:'center',borderLeft:" 1px solid rgb(220,220,220)"}}>
          <div style={{display:'flex'}}>
            <Space style={{margin:'0px 3vw', color:'black', fontSize:'2vw'}}>
            <ArrowLeftOutlined />
            </Space>
          <div style={{margin:'0vh 0px', width:'30vw'}}> 
          <Input size="large" style={{border:'1px solid rgb(222, 223, 224)', borderRadius:'5px', backgroundColor:'rgb(255,255,255)',fontSize:'1vw'}} placeholder="Search by Employee or Application" prefix={<SearchOutlined style={{margin:'0px 5px', fontSize:'1.5vw'}}/>} />
          </div>
          </div>
          <div>
          <Button type="primary" icon={<UserAddOutlined/>} size='large'>
            Invite Members
          </Button>
          <span style={{margin:'0px 10px'}}>
          <Badge style={{margin:'5px 10px'}} dot='true'>
           <BellOutlined 
            style={{fontSize:'2vw'}}
           />
           </Badge>
      </span>
      <span style={{margin:'0px 20px 0px 5px'}}>
        <Profile/>
        </span>
            {/* <Button type='default'className='site-button-ghost-wrapper' icon={<UserAddOutlined/>} style={{display:'flex', width:'12vw'}}>Invite Members</Button> */}
          </div>
        </div>
        </Header>
      <Layout style={{width:'100vw'}} hasSider>
        <div style={siderStyle}>
          <div style={{height:'120vh'}}>

          <MenoCmp items ={items}></MenoCmp>
          </div>
          <MenoCmp style={siderStyle} items ={items1}></MenoCmp>
        </div>
      
        <Content style={contentStyle}>
          {/* <Matter/> */}
          <FloatButton icon={<MessageOutlined />} type="primary" style={{ right: 24 }} />
          <div>
          <div style={{width:'80%',backgroundColor:'transparent' , margin: '10vh 0vw 0px 8vw'}} >
      <h1 style={{fontSize:'2.5vw', margin:'0px'}}> Integrations</h1>
      <p style={{fontWeight:'600'}}>Missing your favorite Integration You can request one <a href=''>here</a></p>
          <Integrations item={SignOn} head='Identity and Single Sign On'></Integrations>
          <Integrations item={Accounting} head='Accounting'></Integrations>
          <Integ item={Engagement} head='Engagement'></Integ>
          </div>
          </div>
          <div>
          </div>
          </Content>
      </Layout>
      
    </Layout>
    </Space>
  </>
  
  )
}

export default Home