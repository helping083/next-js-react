import { createQueryClient, QueryProvider } from 'shared';
import { Test } from '../components/layout';
import React from 'react';
import '../../styles/globals.css'

const queryClient = createQueryClient()

function MyApp({ Component, pageProps }) {
  const [queryClientState] = React.useState(() => queryClient)

  return (
    <QueryProvider
      queryClient={queryClientState}
      dehydratedState={pageProps.dehydratedState}

    >
      <Test>
        <Component {...pageProps} />
      </Test>
    </QueryProvider>

  )
}

export default MyApp
