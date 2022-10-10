import { SearchApiServiceI, ApiClientI } from "@common/frontend";

export class SearchApiService implements SearchApiServiceI {
  constructor(private apiClient: ApiClientI) {
    this.apiClient = apiClient;
  }

  async search(): Promise<any> {
    try {
      const res = await this.apiClient.get('/search');
      return res.data;
    } catch(error) {
      return error
    }
  }
}