/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import { message } from 'antd';
import { CryptoPair } from 'Types';
import CryptoService from 'Services/CryptoService';

type AppContextProps = {
  loading: boolean;
  errorMessage: string;
  pairs: CryptoPair[];
  getMarketInfo: () => any;
  setIntervalTime: any;
  intervalTime: number;
  [key: string]: any;
};

export const AppContext = createContext<AppContextProps>({
  errorMessage: '',
  pairs: [],
  loading: false,
  getMarketInfo: () => true,
  setIntervalTime: () => true,
  intervalTime: 5,
});

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

let intervalId: NodeJS.Timeout;

export const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [errorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [intervalTime, setIntervalTime] = useState(5);
  const [pairs, setPairs] = useState<CryptoPair[]>([]);
  const service = new CryptoService();

  const getMarketInfo = async () => {
    try {
      setLoading(true);
      const result = await service.getMarketInfo();
      setPairs(result.map((item: any) => new CryptoPair(item)));
    } catch (error) {
      message.error(error.message || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      getMarketInfo();
    }, intervalTime * 1000);
  }, [intervalTime]);

  const value: AppContextProps = {
    errorMessage,
    getMarketInfo,
    setIntervalTime,
    intervalTime,
    loading,
    pairs,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
