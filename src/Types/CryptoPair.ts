import { STATUS } from 'Enums/Status';

export class CryptoPair {
  createdAt: Date;

  from: number;

  max: number;

  min: number;

  minConf: number;

  orderExpiresIn: number;

  rate: number;

  status: STATUS;

  to: string;

  updatedAt: Date;

  constructor(json?: any) {
    this.createdAt = json.createdAt || new Date();
    this.from = json.from || 0;
    this.max = json.max || 0;
    this.min = json.min || 0;
    this.minConf = json.minConf || 0;
    this.orderExpiresIn = json.orderExpiresIn || 0;
    this.rate = json.rate || 0;
    this.status = json.status || STATUS.ACTIVE;
    this.to = json.to || '';
    this.updatedAt = json.updatedAt || new Date();
  }
}
