import React from 'react';
import { Select } from 'antd';
import { AppContext } from 'context/AppProvider';

import './Refresher.scss';

interface Props {}

const Refresher: React.FunctionComponent<Props> = () => {
  const { intervalTime, setIntervalTime } = React.useContext(AppContext);

  const handleChange = (value: number) => {
    setIntervalTime(value);
  };

  return (
    <div className="Refresher">
      <div className="Title">Reload in every</div>
      <Select value={intervalTime} style={{ width: 150 }} onChange={handleChange}>
        <Select.Option value={2}>2 seconds</Select.Option>
        <Select.Option value={5}>5 seconds</Select.Option>
        <Select.Option value={10}>10 seconds</Select.Option>
        <Select.Option value={15}>15 seconds</Select.Option>
        <Select.Option value={30}>30 seconds</Select.Option>
      </Select>
    </div>
  );
};

export default Refresher;
