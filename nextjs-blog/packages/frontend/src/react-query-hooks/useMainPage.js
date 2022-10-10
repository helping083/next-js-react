import { useQuery } from 'react-query'
import { searchApiService } from '../services'

export const mainQueryKey = 'pokemon'

export default function usePokemons() {
  const { data: search, isFetching } = useQuery(mainQueryKey, async () => {
    const res = await searchApiService.search()
    return res
  })

  return { search, isFetching }
}
