function Weather(props) {
  return (
    <div>
      <h3>Weather from openweathermap.org</h3>
      <p>In city {props.city}: {props.descr}, {props.temper}&deg;C</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const city = context.query.cityname
  const apiKey = process.env.API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  const res = await fetch(url)
  const json = await res.json()

  if (!json) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      city: json.name,
      descr: json.weather[0].description,
      temper: parseInt(json.main.temp -273),
    },
  }
}

export default Weather
