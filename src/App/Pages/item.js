import { AppstoreOutlined, MailOutlined, SettingOutlined, PieChartTwoTone, PieChartOutlined ,
    InteractionOutlined, UserOutlined,
    LikeOutlined,BorderOutlined,
    AlignLeftOutlined,LinkOutlined


} from '@ant-design/icons';

import { Avatar, Badge } from 'antd';



    const user ={
        border:'1px solid black',
        borderRadius :'50%',
        // width :'1.5vw',
        // height :'1.5vw',
        fontSize:'1.5vw',
        
    }





const items = [
    getItem('Option 1', '1',<PieChartTwoTone size='large' />),
   
  
      getItem('MENU', 'g1', null, [
        getItem('Applications', '2',<AppstoreOutlined size='15vw'/>), 
      getItem('Renewals', '3', <InteractionOutlined />),
      getItem('Transactions', '4', <BorderOutlined ><AlignLeftOutlined /></BorderOutlined>),
      getItem('Employees', '5', <UserOutlined />)
      ],
         'group'),
      getItem('SETTING', 'g2', null, [
        getItem('Integration', '6', <LinkOutlined />),
        getItem('Account', '7', <div style={user}><UserOutlined /></div>)
      ], 'group'),
  ];






 
  const items1 =[
    {
        type: 'divider',
      },
    getItem('Webex Startship', 'sub4', <SettingOutlined />, [
     
    ]),
  ]
  const items2 =[
    {
        type: 'divider',
      },
    getItem('', 'sub4', <Avatar></Avatar>, []
    ),
  ]





  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  const SignOn =[
    {title : 'Google Workspace',icon:{}, detail:'Setup Google Workspace with one-click to work flawlessly with Forscribe', button:'Connect', tag :{}},
    {title : 'Office 365',icon:{}, detail:'Setup office 365 if you organistion depands on it as an Identity Provider', button:'Connect', tag: {}}
  ]
  const Accounting =[
    {title : 'Xiro',icon:{}, detail:'Gather actionable information for every known application that persists in your book', button:'Connect', tag :{}},
    {title : 'Quickbooks',icon:{}, detail:'Organize your App spend and gather actionable information insight to make informed decision ', button:'Connect', tag: {}},
    {title : 'Csv',icon:{}, detail:'Manually upload your Transaction data every month and stay aware of you App Spend and usage', button:'Connect', tag: {}}
  ]
  const Engagement =[
    {title : 'Zoom ',icon:{}, detail:'Setup Google Workspace with one-click to work flawlessly with Forscribe', button:'Connect', tag :{}},
    {title : 'Slack',icon:{}, detail:'Setup office 365 if you organistion depands on it as an Identity Provider', button:'Connect', tag: {}},
    {title : 'Jira',icon:{}, detail:'Setup office 365 if you organistion depands on it as an Identity Provider', button:'Connect', tag: {}}
  ]
  
  
  export {items, items1, items2, SignOn, Accounting, Engagement}