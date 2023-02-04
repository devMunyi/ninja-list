import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title> Ninja List | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <main>
        <h1 className={styles.title}>Homepage</h1>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis
          voluptatem commodi odio animi at perferendis minus repellendus explicabo
          voluptatibus dolore magni sint eligendi, voluptates deserunt unde ad
          dicta. Qui, placeat culpa molestiae unde accusamus, consequatur facilis
          deleniti explicabo dicta aut impedit incidunt dolore voluptas alias
          consequuntur enim inventore laudantium, iste recusandae veritatis
          debitis blanditiis praesentium optio! Sunt facilis iure sequi molestias,
          earum minus dolorum explicabo asperiores hic non quo fugiat doloremque,
          modi consequuntur minima odio maxime corporis soluta impedit aliquid.
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis
          voluptatem commodi odio animi at perferendis minus repellendus explicabo
          voluptatibus dolore magni sint eligendi, voluptates deserunt unde ad
          dicta. Qui, placeat culpa molestiae unde accusamus, consequatur facilis
          deleniti explicabo dicta aut impedit incidunt dolore voluptas alias
          consequuntur enim inventore laudantium, iste recusandae veritatis
          debitis blanditiis praesentium optio! Sunt facilis iure sequi molestias,
          earum minus dolorum explicabo asperiores hic non quo fugiat doloremque,
          modi consequuntur minima odio maxime corporis soluta impedit aliquid.
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis
          voluptatem commodi odio animi at perferendis minus repellendus explicabo
          voluptatibus dolore magni sint eligendi, voluptates deserunt unde ad
          dicta. Qui, placeat culpa molestiae unde accusamus, consequatur facilis
          deleniti explicabo dicta aut impedit incidunt dolore voluptas alias
          consequuntur enim inventore laudantium, iste recusandae veritatis
          debitis blanditiis praesentium optio! Sunt facilis iure sequi molestias,
          earum minus dolorum explicabo asperiores hic non quo fugiat doloremque,
          modi consequuntur minima odio maxime corporis soluta impedit aliquid.
        </p>

        <Link href='/ninjas' className={styles.btn}>See Ninjas Listing</Link>
    </main>
    </>
  )
}
