import portfolio1 from 'assets/images/portfolio1.jpg';
import portfolio2 from 'assets/images/portfolio2.jpg';
import portfolio3 from 'assets/images/portfolio3.jpg';
import { Features, Techs } from 'enums';
import React from 'react';

export const portfolio = {
  name: 'Portfolio',
  description: (
    <span>
      My web devloper portfolio you are using right now, built with <b>React</b>. This portfolio includes
      informative pages about my coding work like skills, resume and projects information. The contact page
      contains a form that send me an email with the applicant information (using emailJS API). The
      application collect data about the client like projects and pages he visited and send it together with
      the form to my personal email.
    </span>
  ),
  demoUrl: undefined,
  sourceUrl: 'https://github.com/zabtani/Portfolio',
  imgs: [portfolio1, portfolio2, portfolio3],
  techs: [Techs.REACT, Techs.HTML, Techs.CSS3, Techs.TS, Techs.MUI],
  features: [
    Features.CONTEXT,
    Features.APIS,
    Features.LOCAL_STORAGE,
    Features.MUI,
    Features.ANIMATIONS,
    Features.MOBILE,
  ],
};
