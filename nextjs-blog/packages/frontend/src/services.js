import { APiClient, SearchApiService }  from "@core/marketplace"
import { configs } from '@common/frontend'

export const apiClient = new APiClient(configs);
export const searchApiService = new SearchApiService(apiClient);