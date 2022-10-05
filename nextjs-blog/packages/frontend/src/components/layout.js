import { ReactQueryDevtools } from 'react-query/devtools'

export function Test(props) {
  return (
    <>
      <h1>test works</h1>
      {props.children}
      <ReactQueryDevtools/>
    </>
  )
}