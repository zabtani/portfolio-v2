import colorgame1 from 'assets/images/colorgame1.jpg';
import colorgame2 from 'assets/images/colorgame2.jpg';
import colorgame3 from 'assets/images/colorgame3.jpg';
import { Features, Techs } from 'enums';

export const colorsgame = {
  name: 'Colors-game',
  description: (
    <span>
      Colors memory game built with <b>Plain JavaScript</b>. User can choose player name and optional colors
      to memorize. Then, the game generates new level with some random colors snapshots for limited time.
      Player should recall which color was where. Levels gets harder by adding more colors to recall. Includes
      recoreds table, stores data in localStorage.
    </span>
  ),
  demoUrl: 'https://zabtani.github.io/Colors-game/',
  sourceUrl: 'https://github.com/zabtani/Colors-game',
  imgs: [colorgame1, colorgame2, colorgame3],
  techs: [Techs.JS, Techs.HTML, Techs.CSS3],
  features: [Features.MVC, Features.JS_CLASSES, Features.DOM, Features.CSS3, Features.MOBILE],
};
