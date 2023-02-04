import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

// note: below function will run before Home component is rendered
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Home = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja} className={styles.single}>
          {ninja.name}
        </Link>
      ))}
    </div>
  )
}

export default Home;