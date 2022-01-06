// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


import styles from "../styles/Home.module.css";

function Weather(props) {
  return (
    <main className={styles.main}>
      <div >
      <div className={styles.grid}>
        <div className={styles.main}>
          <h3>From openweathermap.org</h3><div>   <br/></div>
          <h2 ><p>Weather in {props.city}: {props.descr}, {props.temper}&deg;C</p></h2>
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