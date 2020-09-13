import React from 'react';
// import { Button } from 'antd';
import { useRequest } from 'ahooks';
import { Select } from 'antd';
import Mock from 'mockjs';
// import styles from './index.less';

const { Option } = Select;

async function getEmail(search) {
  console.log(search);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Mock.mock({
          'data|5': ['@email'],
        }).data,
      );
    }, 300);
  });
}
export default () => {
  const { data, loading, run, cancel } = useRequest(getEmail, {
    debounceInterval: 500,
    manual: true,
  });
  return (
    <div>
      <p>使用 userRequest 的防抖效果</p>
      <Select
        showSearch
        placeholder="Select Emails"
        filterOption={false}
        onSearch={run}
        onBlur={cancel}
        loading={loading}
        style={{
          width: 300,
        }}
      >
        {data && data.map((i) => <Option key={i}>{i}</Option>)}
      </Select>
    </div>
  );
};
