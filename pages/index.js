import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Routesblock from "../components/Routesblock"


export default function Home() {
  return (

      <div className={styles.mainWrapper} data-testid="mainWrapper">
        <main className={styles.main} data-testid="main">
            <div className={styles.pagetitle} data-testid="pagetitle">
                <h2>Main page</h2>
            </div>
            <Routesblock />
        </main>
      </div>
  )
}
