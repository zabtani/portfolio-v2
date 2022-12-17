import wall1 from 'assets/images/wall1.jpg';
import wall2 from 'assets/images/wall2.jpg';
import wall3 from 'assets/images/wall3.jpg';
import { Features, Techs } from 'enums';

export const wall = {
  name: 'Wall',
  description: (
    <span>
      Social media app built with <b>React</b>. User can make a post and publish it onto a public wall.
      Suggest a photo for the chosen title, or lets the user search for one. Stores data on google firebase
      backend service.
    </span>
  ),
  demoUrl: 'https://zabtani.github.io/Wall/',
  sourceUrl: 'https://github.com/zabtani/Wall',
  imgs: [wall1, wall2, wall3],
  techs: [Techs.REACT, Techs.HTML, Techs.CSS3, Techs.FIREBASE, Techs.MUI],
  features: [
    Features.BACKEND,
    Features.ASYNC,
    Features.APIS,
    Features.HTTP_HOOK,
    Features.MUI,
    Features.MOBILE,
  ],
};
