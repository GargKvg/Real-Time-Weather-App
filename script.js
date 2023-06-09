const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7e16ef25bamshc7ea3bc2c801b9ep1deff0jsne7b543047102",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
async function fetchApi(city) {
  try {
    cityName.innerHTML = city;
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    );
    const result = await response.json();

    console.log(result);

    temp.innerHTML = result.temp;
    temp2.innerHTML = result.temp;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    feels_like.innerHTML = result.feels_like;
    // feels_like3.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity2.innerHTML = result.humidity;
    cloud_pct.innerHTML = result.cloud_pct;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed2.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    var sunr = result.sunrise;
    var date = new Date(sunr * 1000);
    sunrise.innerHTML = date.toLocaleTimeString("en-US");

    var suns = result.sunset;
    var date2 = new Date(suns * 1000);
    sunset.innerHTML = date2.toLocaleTimeString("en-US");
  } catch (error) {
    console.error(error);
  }
}
submit.addEventListener("click", (e) => {
  fetchApi(city.value);
});
fetchApi("Delhi");
