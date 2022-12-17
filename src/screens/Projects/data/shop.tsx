import { Features, Techs } from 'enums';
import shop1 from 'assets/images/shop1.jpg';
import shop2 from 'assets/images/shop2.jpg';
import shop3 from 'assets/images/shop3.jpg';

export const shop = {
  name: 'Shop',
  description: (
    <span>
      Shop application built with <b>Plain JavaScript</b>. This ecommerce website generates dynamic catigories
      like prices,discounts,geners and brands base on the data provided to the app. Includes search
      bar,business information pages and cart features.
    </span>
  ),
  demoUrl: 'https://zabtani.github.io/shop/',
  sourceUrl: 'https://github.com/zabtani/shop',
  imgs: [shop1, shop2, shop3],
  techs: [Techs.JS, Techs.HTML, Techs.CSS3],
  tools: [],
  features: [Features.JS_CLASSES, Features.DOM, Features.CSS3, Features.MOBILE],
};
