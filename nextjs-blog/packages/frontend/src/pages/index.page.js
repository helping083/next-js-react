import styles from '../../styles/Home.module.css'
import { Button } from 'shared'
import React from 'react'
import { useQuery, dehydrate } from 'react-query'
import { createQueryClient } from 'shared'

export default function Home(props) {
  console.log('props', props)
  const { data: search } = useQuery(['pokemons'], async () => {
    const test = await fetch(`http://localhost:3000/api/search`);
    const res = await test.json();
    return res;
  });

  const { data, isFetching } = useQuery(['pokemon'], async () => {
    const test = await fetch(`http://localhost:3000/api/search`);
    const res = await test.json();
    return res;
  })
  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold underline bg-sky-500 hover:bg-sky-700">
        Hello world!
      </h1>
      {search?.meetups.map(metup => metup.title)}
      {data?.meetups.map(metup => metup.title)}
      {isFetching && <>fetching</>}
    </div>
  )
}

export async function getServerSideProps(context) {
  const queryClient = createQueryClient()

  await queryClient.prefetchQuery('pokemons', async () => {
    const test = await fetch(`http://localhost:3000/api/search`);
    const res = await test.json();
    return res;
  })


  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }, // will be passed to the page component as props
  }
}