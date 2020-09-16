import React from 'react';
import './DashboardStyle.scss';
import CryptoTable from './Components/CryptoTable/CryptoTable';
import Refresher from './Components/Refresher/Refresher';
import MarketHeader from './Components/MarketHeader/MarketHeader';

interface Props {}

const DashboardComponent: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <div className="Dashboard">
        <div className="Header">
          <h1>Market Dashboard</h1>
        </div>
        <div className="Container">
          <div className="Toolbar">
            <MarketHeader />
            <Refresher />
          </div>
          <CryptoTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
