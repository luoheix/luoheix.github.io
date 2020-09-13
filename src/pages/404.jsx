import React from 'react';
// import styles from './index.less';
import { Link } from 'umi';
import { Result, Button } from 'antd';

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，您访问的页面不存在"
      extra={
        <Button type="primary">
          <Link to="/">返回主页</Link>
        </Button>
      }
    />
  );
};
