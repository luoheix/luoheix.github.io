import React from 'react';
import { history } from 'umi';
import { Layout, Menu, Breadcrumb } from 'antd';
// import Header from './header';
// import Footer from './footer';
import styles from './index.less';

const { Header, Content, Footer } = Layout;

export default (props) => {
  const {
    location: { pathname },
  } = history;
  const [, key] = pathname.split('/');
  console.log(key, history, '参数123');
  return (
    <Layout className={styles.layout}>
      <Header>
        <div className={styles.logo}>
          <i className="iconfont iconceshi" />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.content}>{props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>UmiJs + ahooks Demo ©2020</Footer>
    </Layout>
  );
};
