import React from 'react';
import { Tag } from 'antd';

import { STATUS } from 'Enums/Status';

interface Props {
  value: STATUS;
}

const CryptoTableStatus: React.FunctionComponent<Props> = ({ value }) => {
  return <Tag color={value === STATUS.ACTIVE ? 'green' : 'cyan'}>{value}</Tag>;
};

export default CryptoTableStatus;
