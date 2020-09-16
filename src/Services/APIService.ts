import MESSAGES from 'Constants/MESSAGES';
import { TOKEN_KEY } from 'Constants/StorageConst';

import { KeyValue } from '../Types/KeyValue';

export type ApiHeader = {
  key: string;
  value: string;
};

export type ApiMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';

export type ApiResult = 'success' | 'failure';

export type ApiError = {
  ErrorCode: string;
  Description: string;
};

export type ApiResponse<T> = {
  Result: ApiResult;
  Response: T | ApiError;
  status_code: number;
  message: string;
};

export class RequestBody<T> {
  private _requestBody: T;

  constructor(requestBody: T) {
    this._requestBody = requestBody;
  }

  get requestBody(): T {
    return this._requestBody;
  }

  set requestBody(newRequestBody: T) {
    this._requestBody = newRequestBody;
  }
}

export class APIService {
  private _authToken = '';

  private _baseUrl = '';

  private _headers: string[][] = [];

  constructor(_authToken: string, _baseUrl: string) {
    this._authToken = _authToken || (localStorage.getItem(TOKEN_KEY) as string);
    this._baseUrl = _baseUrl || (process.env.REACT_APP_API_URL as string);
  }

  // getter
  get authToken(): string {
    return this._authToken;
  }

  // setter
  set authToken(newAuthToken: string) {
    this._authToken = newAuthToken;
  }

  public setHeaders(headers: KeyValue<string, string>[]): APIService {
    headers.forEach((header: KeyValue<string, string>) => {
      if ('key' in header && 'value' in header) {
        const oldHeader = this._headers.find(item => item[0] === header.key);
        if (oldHeader) {
          oldHeader[1] = header.value;
        } else {
          this._headers.push([header.key, header.value]);
        }
      }
    });

    return this;
  }

  get headers(): string[][] {
    return this._headers;
  }

  public resetHeaders(): void {
    this._headers = [];
  }

  public isObject(value: any): boolean {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  public convertError(errorObj: any): any {
    if (this.isObject(errorObj)) {
      // Extract error data
      let errorStr = '';
      const errorArr = Object.keys(errorObj);
      errorArr.forEach(errorKey => {
        errorStr += (errorArr.length > 1 ? '- ' : '') + errorObj[errorKey][0].toString();
        // Add line break
        if (errorArr.length > 1) {
          errorStr += '\n';
        }
      });
      return errorStr;
    }
    return errorObj.toString();
  }

  public async handleResponse(res: Response): Promise<any> {
    if (res.status !== 200 && res.status !== 201) {
      const error: any = await res.text();
      throw error || MESSAGES.UNKNOWN_ERROR;
    }
    try {
      const rs = await res.json();
      return rs;
    } catch (error) {
      return true;
    }
  }

  public httpGet<T>(url: string): Promise<ApiResponse<T>> {
    return fetch(`${this._baseUrl}${url}`, {
      headers: this._headers,
      method: 'GET',
    })
      .then((res: any) => this.handleResponse(res))
      .then((data: any) => {
        const response: ApiResponse<T> = data;
        return response;
      });
  }

  public httpPost<T>(url: string, requestData: any): Promise<ApiResponse<T>> {
    return fetch(`${this._baseUrl}/${url}`, {
      headers: this._headers,
      method: 'POST',
      credentials: 'omit',
      body: JSON.stringify(requestData),
    })
      .then((res: any) => this.handleResponse(res))
      .then((data: any) => {
        const response: ApiResponse<T> = data;
        return response;
      });
  }

  public httpPostForm<T>(url: string, requestForm: FormData): Promise<ApiResponse<T>> {
    return fetch(`${this._baseUrl}/${url}`, {
      headers: this._headers,
      method: 'POST',
      credentials: 'omit',
      body: requestForm,
    })
      .then((res: Response) => res.json())
      .then((data: any) => {
        const response: ApiResponse<T> = data;
        return response;
      });
  }

  public httpPut<T>(url: string, requestData: any): Promise<ApiResponse<T>> {
    return fetch(`${this._baseUrl}/${url}`, {
      headers: this._headers,
      method: 'PUT',
      credentials: 'omit',
      body: JSON.stringify(requestData),
    })
      .then((res: Response) => res.json())
      .then((data: any) => {
        const response: ApiResponse<T> = data;
        return response;
      });
  }

  public httpPatch<T>(url: string, requestData: any): Promise<ApiResponse<T>> {
    return fetch(`${this._baseUrl}/${url}`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(requestData),
    })
      .then((res: Response) => res.json())
      .then((data: any) => {
        const response: ApiResponse<T> = data;
        return response;
      });
  }

  public httpDelete<T>(url: string, body?: any): Promise<ApiResponse<T>> {
    return fetch(`${this._baseUrl}/${url}`, {
      headers: this._headers,
      method: 'DELETE',
      body: JSON.stringify(body),
    })
      .then((res: Response) => res.json())
      .then((data: any) => {
        const response: ApiResponse<T> = data;
        return response;
      });
  }
}
