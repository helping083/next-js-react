import {useRouter} from 'next/router'

function NewsIdPage() {
    const { query } = useRouter();
    return (
      <>
        <h1>NewsID Page {query.newsId}</h1>
      </>
    )
  }
  
  export default NewsIdPage;