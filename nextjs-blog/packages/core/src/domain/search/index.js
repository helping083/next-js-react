export class SearchApiService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search() {
    try {
      const res = await this.apiClient.get('/search');
      return res.data;
    } catch(error) {
      console.log('err', error)
    }
  }
}