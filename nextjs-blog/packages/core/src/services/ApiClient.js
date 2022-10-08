import axios from 'axios';

export class APiClient {
  api
  reqConfig = {
    responseType: 'json',
    headers: {
        common: {
            Accept: 'application/json',
        },
    },
  }

  constructor(configs) {
    this.configs = configs;
    this.api = axios.create(this.reqConfig);
  }

  get(url, config) {
    return this.api.get(`${this.configs.baseUrl}${url}`, config);
  }

}