import type { NextPage } from 'next'
import Layout from './components/Layout'
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import axios from 'axios'

const Home: NextPage = () => {
  const fetchAPI = async () => {
    const res = await axios.get(`https://nice-plant-0bb839200.1.azurestaticapps.net/api/hello?code=WwPkgjivLXLhDSYTMYMrnP5ScnhgBlbXBu5SRXkD7BqeAzFu5IyHDw==`)
    console.log(res, 'test res')
  }
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            test app
          </h1>
          <button
            onClick={fetchAPI}
          >
            test api
          </button>

        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  );
}

export default Home
