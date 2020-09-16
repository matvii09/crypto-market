import API from 'Constants/APIs';
import { APIService } from './APIService';

export default class CryptoService extends APIService {
  constructor(token = '', baseUrl = '') {
    super(token, baseUrl);
    this.setHeaders([{ key: 'Content-Type', value: 'application/json' }]);
  }

  public async getMarketInfo(): Promise<any> {
    try {
      const response = await this.httpGet(`${API.MARKET_INFO}`);
      return response;
    } catch (error) {
      throw error.message || error;
    }
  }
}
