import React from 'react';
import { Breadcrumb } from 'antd';

interface Props {}

const BreadcrumbComponent: React.FunctionComponent<Props> = () => {
  return (
    <Breadcrumb style={{ background: 'white', padding: 20 }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
