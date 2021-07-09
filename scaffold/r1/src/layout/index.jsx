import React from 'react'
import { Link } from 'react-router-dom'
import { Layout as AntdLayout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
const { Header, Content, Footer, Sider } = AntdLayout;

class MLayout extends React.Component{
  render() {
    return (
      <AntdLayout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo"></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined/>}>
              <Link to="/">index</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
              <Link to="/about">about</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined/>}>
              <Link to="/v1">v1</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined/>}>
              <Link to="/antd">antd</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined/>}>
              <Link to="/scss">scss</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <AntdLayout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </AntdLayout>
      </AntdLayout>
    )
  }
}
export default MLayout