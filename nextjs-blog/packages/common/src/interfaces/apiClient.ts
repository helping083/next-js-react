export interface ApiClientI {
  get(url: string, config?: any): Promise<any>
}