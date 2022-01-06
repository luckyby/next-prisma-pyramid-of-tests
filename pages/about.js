import styles from '../styles/Home.module.css'

export default function AboutPage() {
  return (
  <main className={styles.main}>
      <div className={styles.grid}>
        <h2>About</h2>
        <div>
          <p>This server is a Next.js project</p>
          <p>Open <a href="http://localhost:3000">http://localhost:3000</a>  with your browser to see the result.</p>
          <p>API routes can be accessed on <a href="http://localhost:3000">http://localhost:3000/api/hello</a>.</p>
          <br/>
          <p>
            <h3>Learn More</h3>
            <p>To learn more about Next.js, take a look at the following resources:</p>

            <p>Next.js Documentation - learn about Next.js features and API.<br/>
            Learn Next.js - an interactive Next.js tutorial.<br/>
            You can check out the Next.js GitHub repository - your feedback and contributions are welcome!<br/>
            </p><br/>
            <h3>Deploy on Vercel</h3>
            <p>The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.</p>

            Check out our Next.js deployment documentation for more details.</p>
        </div>
      </div>
    </main>
  )
}