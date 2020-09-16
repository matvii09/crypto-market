import React, { useEffect } from 'react';
import { Table } from 'antd';
import { AppContext } from 'context/AppProvider';

import './CryptoTable.scss';
import { columns } from './columns';

interface Props {}

const CryptoTable: React.FunctionComponent<Props> = () => {
  const { pairs, getMarketInfo } = React.useContext(AppContext);

  useEffect(() => {
    getMarketInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="CryptoTable">
      <Table columns={columns} rowKey={row => row.from + row.to} dataSource={pairs} />
    </div>
  );
};

export default CryptoTable;
