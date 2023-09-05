async function testWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=298c85b682e24ceba0a22428230509&q=seattle",
    { mode: "cors" },
  );
  response.json().then(function (response) {
    console.log(response);
  });
}
export { testWeather };
