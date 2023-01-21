import { Features, Techs } from 'enums';
import noter1 from 'assets/images/noter1.jpg';
import noter2 from 'assets/images/noter2.jpg';
import noter3 from 'assets/images/noter3.jpg';
import React from 'react';

export const noter = {
  name: 'Noter',
  description: (
    <span>
      Notes application built with <b>React</b>. User can add dynamic labels and notes base on them. Includes
      active/completed notes list distribution, with a filter feature for each list.
    </span>
  ),
  demoUrl: 'https://zabtani.github.io/Noter/',
  sourceUrl: 'https://github.com/zabtani/Noter',
  imgs: [noter1, noter2, noter3],
  techs: [Techs.REACT, Techs.HTML, Techs.CSS3, Techs.MUI],
  features: [Features.CRUD, Features.CONTEXT, Features.LOCAL_STORAGE, Features.MUI, Features.MOBILE],
};
