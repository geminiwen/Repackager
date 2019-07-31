import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import "./index.less" 

class Sider extends React.Component {
    state = {
      collapsed: false,
    };
  
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
  
    render() {
      return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['build']}>
              <Menu.Item key="build">
                <Icon type="tool" />
                <span>构建</span>
              </Menu.Item>
              <Menu.Item key="setting">
                <Icon type="setting" />
                <span>设置</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      );
    }
  }
 

ReactDOM.render(<Sider />, document.getElementById("container"))