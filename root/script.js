// Getting current location
navigator.geolocation.getCurrentPosition((pos) => {
  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;

  showLoc(lat, long);
  plotLoc(lat, long);
  getWeather(lat, long);
});

// posting data to database
function postLoc(weather) {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;
    const now = Date.now();

    var data = {
      latitude: lat,
      longitude: long,
      timestamp: now,
      weather: weather,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch("/api", options);
  });
}

// Showing location
function showLoc(lat, long) {
  const coords = document.getElementById("coords");
  const root = document.createElement("div");
  root.textContent = `Latitude: ${lat}°, Longitude: ${long}°`;
  coords.append(root);
}

//Getting weather report
async function getWeather(lat, long) {
  const data = { lat, long };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const request = await fetch("/weather", options);
  const req_json = await request.json();
  //console.log(req_json);

  const data_div = document.getElementById("air-data");
  const res_loc = req_json.location;
  const res_cur = req_json.current;
  const res_aq = res_cur.air_quality["us-epa-index"];
  const carbon = Math.floor(res_cur.air_quality.co);
  const currentDate = new Date().toLocaleString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });
  if (res_aq == 1) {
    var aq = "Good";
  } else if (res_aq == 2) {
    var aq = "Moderate";
  } else if (res_aq == 3) {
    var aq = "Unhealthy for sensitive group";
  } else if (res_aq == 4) {
    var aq = "Unhealthy";
  } else if (res_aq == 5) {
    var aq = "Very Unhealthy";
  } else if (res_aq == 6) {
    var aq = "Hazardous";
  }

  var air_data = `In ${res_loc.name}, the weather is ${res_cur.condition.text} with temperature of ${res_cur.temp_c}°c; which actually feels like ${res_cur.feelslike_c}°c. Here, humidity is around ${res_cur.humidity} and Carbon Monoxide level is ${carbon}(μg/m3). The overall air quality is ${aq}. Timestamp: ${currentDate}`;
  data_div.textContent = air_data;

  postLoc(air_data);
}

// Plotting location in map
function plotLoc(lat, long) {
  var map = L.map("map").setView([lat, long], 10);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  L.marker([lat, long]).addTo(map);
}
