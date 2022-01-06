export default async function handler(req, res) {
  const { cityname } = req.query
  const apiKey = process.env.API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`

  const response = await fetch(url)
  const json = await response.json()

  res.status(200).json({
    city: json.name,
    description: json.weather[0].description,
    temperature: parseInt(json.main.temp -273),
    degree: "Celsius"
  })
}