// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


import styles from "../styles/Home.module.css";

function Weather(props) {
  return (
    <main className={styles.main}>
      <div >
      <div className={styles.grid}>
        <div className={styles.main}>
          <p style={{fontSize: '1.2rem'}}>From openweathermap.org</p><div>   <br/></div>
          <p style={{fontSize: '2rem'}}>Weather in {props.city}: {props.descr}, {props.temper}&deg;C</p>
        </div>
      </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const city = process.env.CITY_NAME
  const apiKey = process.env.API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  const res = await fetch(url)
  const json = await res.json()

 return {
    props: {
      city: json.name,
      descr: json.weather[0].description,
      temper: parseInt(json.main.temp -273),

    },
  }
}

export default Weather