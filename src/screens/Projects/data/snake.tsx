import { Features, Techs } from 'enums';
import snake1 from 'assets/images/snake1.jpg';
import snake2 from 'assets/images/snake2.jpg';
import snake3 from 'assets/images/snake3.jpg';

export const snake = {
  name: 'Snake',
  description: (
    <span>
      Old school snake game built with <b>React</b>. snake is picking apples and grow, game is over when the
      snake touch its own body.thin application that practice react hooks and state management. not responsive
      for mobile.
    </span>
  ),
  demoUrl: 'https://zabtani.github.io/Snake/',
  sourceUrl: 'https://github.com/zabtani/Snake',
  imgs: [snake1, snake2, snake3],
  techs: [Techs.REACT, Techs.HTML, Techs.CSS3],
  features: [Features.HOOKS, Features.CSS3],
};
