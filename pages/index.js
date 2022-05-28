import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Routesblock from "../components/Routesblock"


export default function Home() {
  return (

      <div className={styles.mainWrapper}>
        <main className={styles.main}>
            <div className={styles.pagetitle}>
                <h2>Main page</h2>
            </div>
            <Routesblock />
        </main>
      </div>
  )
}
