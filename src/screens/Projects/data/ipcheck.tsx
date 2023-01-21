import ipcheck1 from 'assets/images/ipcheck1.jpg';
import ipcheck2 from 'assets/images/ipcheck2.jpg';
import ipcheck3 from 'assets/images/ipcheck3.jpg';
import { Features, Techs } from 'enums';
import React from 'react';

export const ipcheck = {
  name: 'IP-check',
  description: (
    <span>
      Check IP address application built with <b>React</b>. Gives information base on provided IP or base on
      client IP (when first entered). Provides information of an IP like origin city and country,flag and
      location on a map. works with several API's like mapbox, ipgeolocation,cloudflare and unsplash.
    </span>
  ),
  demoUrl: 'https://zabtani.github.io/IP-check/',
  sourceUrl: 'https://github.com/zabtani/IP-check',
  imgs: [ipcheck1, ipcheck2, ipcheck3],
  techs: [Techs.REACT, Techs.HTML, Techs.CSS3],
  features: [Features.HOOKS, Features.ASYNC, Features.APIS, Features.MOBILE],
};
