import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const NotFound = () => {
  const router = useRouter()

  // useEffect(() => {
  //   setTimeout(() => {
  //     // router.go(-1)
  //     // router.go(1)
  //     router.push('/')
  //   }, 3000)
  // }, [])

  return (
    <div className="not-found">
      <Image alt="web-dev service image" src="/error-pic.svg" height="500" width="500" />
      <h1>Ooops... <span className="not-found-small">That page cannot be found :(</span></h1>
      {/* <h2>That page cannot be found :(</h2> */}
      {/* <p>Going back to the <Link href="/"><a>Homepage</a></Link> is 3 seconds...</p> */}
    </div>
  );
}

export default NotFound
