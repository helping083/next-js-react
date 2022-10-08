import { useQuery } from "react-query";
import { searchApiService } from '../services';

export const mainQueryKey = 'pokemon';

export default function usePokemons() {
  const {data: search, isFetching} = useQuery(mainQueryKey, async () => {
    try {
      const res = await searchApiService.search()
      return res;
    } catch (error) {
      console.log(error)
    }
  })

  return {search, isFetching }
}