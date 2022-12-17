import { Techs } from 'enums';
import { ReactComponent as Css3 } from 'assets/svgs/css.svg';
import { ReactComponent as Firebase } from 'assets/svgs/firebase.svg';
import { ReactComponent as Git } from 'assets/svgs/git.svg';
import { ReactComponent as Github } from 'assets/svgs/github.svg';
import { ReactComponent as Html5 } from 'assets/svgs/html.svg';
import { ReactComponent as Js } from 'assets/svgs/js.svg';
import { ReactComponent as Mobx } from 'assets/svgs/mobx.svg';
import { ReactComponent as Mui } from 'assets/svgs/mui.svg';
import { ReactComponent as Npm } from 'assets/svgs/npm.svg';
import { ReactComponent as React } from 'assets/svgs/react.svg';
import { ReactComponent as Redux } from 'assets/svgs/redux.svg';
import { ReactComponent as Typescript } from 'assets/svgs/typescript.svg';

interface Props {
  tech: Techs;
}
const TechLogo = ({ tech }: Props) => {
  switch (tech) {
    case Techs.CSS3:
      return <Css3 />;
    case Techs.FIREBASE:
      return <Firebase />;
    case Techs.GIT:
      return <Git />;
    case Techs.GITHUB:
      return <Github />;
    case Techs.HTML:
      return <Html5 />;
    case Techs.JS:
      return <Js />;
    case Techs.MOBX:
      return <Mobx />;
    case Techs.MUI:
      return <Mui />;
    case Techs.NPM:
      return <Npm />;
    case Techs.REACT:
      return <React />;
    case Techs.REDUX:
      return <Redux />;
    case Techs.TS:
      return <Typescript />;
    default:
      return null;
  }
};
export default TechLogo;
