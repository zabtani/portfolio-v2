import forecast1 from 'assets/images/forecast1.jpg';
import forecast2 from 'assets/images/forecast2.jpg';
import forecast3 from 'assets/images/forecast3.jpg';
import { Features, Techs } from 'enums';

export const forecast = {
  name: 'Forecast',
  description: (
    <>
      Weather forecast app built with <b>React</b> and <b>Typescript</b>. initially the app present's user
      city's forecast base on the geolocation. then user can also search for city (and get suggestions).The
      app generates the location forecast (includes 5 days forecast and more information). user can choose
      between celsius/fahrenheit units, add location to favorites, and toggle between dark/light mode.
    </>
  ),
  demoUrl: 'https://zabtani.github.io/weather-forecast',
  sourceUrl: 'https://github.com/zabtani/weather-forecast/tree/master',
  imgs: [forecast1, forecast2, forecast3],
  techs: [Techs.REACT, Techs.HTML, Techs.REDUX, Techs.TS, Techs.CSS3, Techs.MUI],
  features: [
    Features.APIS,
    Features.ASYNC,
    Features.APIS,
    Features.ASYNC_THUNKS,
    Features.MUI,
    Features.MOBILE,
  ],
};
