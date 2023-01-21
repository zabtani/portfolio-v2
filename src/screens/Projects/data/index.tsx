import { Features, Techs } from 'enums';
import { colorsgame } from './colorsgame';
import { forecast } from './forecast';
import { ipcheck } from './ipcheck';
import { noter } from './noter';
import { portfolio } from './portfolio';
import { shop } from './shop';
import { snake } from './snake';
import { wall } from './wall';
import React from 'react';

export interface ProjectData {
  name: string;
  description: JSX.Element;
  demoUrl?: string;
  sourceUrl: string;
  imgs?: string[];
  techs: Techs[];
  features: Features[];
}

export const PROJECTS: ProjectData[] = [forecast, wall, snake, noter, ipcheck, portfolio, shop, colorsgame];
