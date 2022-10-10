import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { ApiClientI } from "@common/frontend";

export class APiClient implements ApiClientI {
  public api: AxiosInstance 
  private reqConfig: CreateAxiosDefaults<any> = {
    responseType: 'json',
    headers: {
        common: {
            Accept: 'application/json',
        },
    },
  }

  constructor(private configs) {
    this.configs = configs;
    this.api = axios.create(this.reqConfig);
  }

  public get(url, config?: {}): Promise<any> {
    return this.api.get(`${this.configs.baseUrl}${url}`, config);
  }

}