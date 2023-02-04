import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) => would go back to the previously loaded page
      router.push('/') // redirect to homepage
    }, 3000)
  }, [])

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <p>That page cannot be found</p>
      <p>Go back to <Link href='/' className="a">home page</Link></p>
    </div>
  )
}

export default NotFound;