import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import ROUTES from 'Constants/Routes';
import './ShellStyle.scss';

const { Header, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const Shell: React.FunctionComponent<Props> = props => {
  const { children } = props;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="Shell__Header">
        <div className="Shell__Header_Logo">CRYPTO MARKET</div>
        <div className="Shell__Header_Main">
          <div>
            <ul className="Shell__Header_Menu">
              <li>
                <Link to={ROUTES.DASHBOARD}>HOME</Link>
              </li>
              <li>
                <Link to={ROUTES.DASHBOARD}>NEWS</Link>
              </li>
            </ul>
          </div>
        </div>
      </Header>
      <Layout>
        <Content>
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Shell;
