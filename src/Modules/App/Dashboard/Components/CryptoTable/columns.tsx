import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { CryptoPair } from 'Types';
import CryptoTableStatus from './CryptoTableStatus';

export const columns: ColumnProps<CryptoPair>[] = [
  {
    title: 'Pair',
    key: 'pair',
    render: (value, record) => <div className="bold-text">{`${record.from} / ${record.to}`}</div>,
  },
  {
    title: 'Rate',
    key: 'rate',
    dataIndex: 'rate',
  },
  {
    title: 'Min',
    key: 'min',
    dataIndex: 'min',
  },
  {
    title: 'Max',
    key: 'max',
    dataIndex: 'max',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: value => <CryptoTableStatus value={value} />,
  },
];
