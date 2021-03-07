import Head from 'next/head'
import Header from '../components/Header'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Max Pintura</title>
      </Head>
      <Header />
      <main>
        <Table />
      </main>
    </div>
  )
}
