import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DehydratedState,
} from 'react-query'

export function createQueryClient() {
  return new QueryClient()
}

export function QueryProvider({
  children,
  queryClient,
  dehydratedState,
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        {children}
      </Hydrate>
    </QueryClientProvider>
  )
}