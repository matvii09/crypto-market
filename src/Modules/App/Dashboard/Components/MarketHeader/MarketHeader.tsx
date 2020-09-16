import React from 'react';
import { Spin } from 'antd';
import { AppContext } from 'context/AppProvider';

import './MarketHeader.scss';

interface Props {}

const MarketHeader: React.FunctionComponent<Props> = () => {
  const { loading } = React.useContext(AppContext);

  return (
    <div className="MarketHeader">
      <h2 className="Title">Market Prices</h2>
      <div className="Spinner">
        <Spin spinning={loading} />
        {loading && <span>Loading...</span>}
      </div>
    </div>
  );
};

export default MarketHeader;
