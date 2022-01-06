import styles from '../styles/Home.module.css'

export default function AboutPage() {
  return (
  <main className={styles.main}>
      <div className={styles.grid}>
        <p style={{fontSize: '2.5rem'}}>About</p>
        <div>
          <p>This server based on next.js</p>
          {/*<p>Open <a href="http://localhost:3000">http://localhost:3000</a>  with your browser to see the result.</p>*/}
          {/*<p>API routes can be accessed on <a href="http://localhost:3000">http://localhost:3000/api/hello</a>.</p>*/}
          <br/>
          <p>
            <p style={{fontSize: '1.5rem'}}>Learn More</p>
            <p>To learn more about Next.js, take a look at the following resources:</p>

            <p><a href="https://nextjs.org/docs">Next.js Documentation</a> - learn about Next.js features and API.<br/>
              <a href="https://nextjs.org/learn">Learn Next.js</a>Learn Next.js - an interactive Next.js tutorial.<br/>
            You can check out <a href="https://github.com/vercel/next.js/">the Next.js GitHub repository</a> - your feedback and contributions are welcome!<br/>
            </p><br/>
            <p style={{fontSize: '1.5rem'}}>Deploy on Vercel</p>
            <p>The easiest way to deploy your Next.js app is to use the <a href="https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme">Vercel Platform</a> from the creators of Next.js.</p>

            Check out our <a href="https://nextjs.org/docs/deployment">Next.js deployment documentation</a> for more details.</p>
        </div>
      </div>
    </main>
  )
}