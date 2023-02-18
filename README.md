# Weather Here

<a href="https://nodejs.org/en/"><img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"></a>
<a href="https://expressjs.com/"><img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"></a>
<a href="https://leafletjs.com/"><img src="https://www.vectorlogo.zone/logos/leafletjs/leafletjs-ar21.svg"></a>
<a href="https://www.npmjs.com/package/npm"><img src="https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg"></a>

"Weather Here!" is a web app that displays the current weather
and air quality of a user's location. By taking the user's
coordinates, the app shows weather conditions like temperature
and humidity, as well as information on air pollutants.

The user's location is also plotted on an interactive map, with
a marker showing the weather and air quality information. With a
simple and user-friendly design, "Weather Here!" is an ideal
tool for anyone who wants to stay informed and prepared about
the weather and air quality in their area.

TLDR : Web app to display weather based on coordinates

### Note :

This project is based on the original sample project [The Weather Here](https://github.com/joeyklee/the-weather-here) by [Joey Lee](https://jk-lee.com/work/) for the ITP course [Quant Humanists](https://github.com/joeyklee/quant-humanists-2019).

## Steps to run this locally

1. Install <a href="https://nodejs.org/en/">Node.js</a>
2. Install <a href="https://www.npmjs.com/package/npm">NPM</a> for packet management
3. Install following packages :

   - [Express](https://expressjs.com/)
   - [NeDB](https://github.com/louischatriot/nedb)
   - [Node fetch](https://www.npmjs.com/package/node-fetch)
   - [Dotenv](https://www.npmjs.com/package/dotenv")

4. Rename `.env_sample` to `.env`
5. Get your API key from [Weather API]("https://www.weatherapi.com/") and paste it in `.env file`
6. Run `app.js` file to start the server

```bash
node app.js
```

7. Open your preferred web browser and type [localhost:3001](http://localhost:3001) in the search bar

## Here is a preview of the web app

![This is an image](root/assets/readme_assets/Data%26API_3_Homepage.png)
