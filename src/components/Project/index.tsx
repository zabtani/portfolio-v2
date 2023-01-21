import { Slide, Fade, Button, Collapse, List, ListItem, ListItemIcon } from '@mui/material';
import TechLogo from 'components/TechLogo';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { ProjectData } from '../../screens/Projects/data';
import useOnScrren from '../hooks/useOnScreen';
import Slider from '../Slider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CodeIcon from '@mui/icons-material/Code';

interface Props extends ProjectData {
  idx: number;
  name: string;
}

const Project = ({ idx, name, imgs, description, techs, features }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScrren(sectionRef);
  const [expanded, setExpanded] = useState(false);
  const featuresIcon = expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;
  const featuresButtonProps = {
    color: 'primary',
    onClick: () => setExpanded((prev) => !prev),
    endIcon: featuresIcon,
  } as {};
  const content = (
    <Section>
      <div className="content-container">
        <SectionHeader>
          <h1> {name} </h1>
          <Techs>
            {techs.map((tech) => (
              <TechLogo tech={tech} />
            ))}
          </Techs>
        </SectionHeader>
        <p>{description}</p>

        <Button {...featuresButtonProps}>App features</Button>
        <Collapse in={expanded} timeout={80} unmountOnExit>
          <List>
            {features.map((feature: string, idx: number) => (
              <ListItem sx={{ color: 'white' }} key={idx}>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CodeIcon />
                </ListItemIcon>
                {feature}
              </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
      <div className="g">
        <Slider imgs={imgs} resoultionsSlideCount={{ desktop: 2, mobile: 1 }} />
      </div>
    </Section>
  );
  return (
    <div style={{ overflow: 'hidden', paddingTop: '40px' }}>
      <SectionWrapper ref={sectionRef}>
        {idx !== 0 ? (
          <Fade timeout={1000} in={isVisible}>
            {content}
          </Fade>
        ) : (
          <Slide timeout={700} direction={'left'} in={true}>
            {content}
          </Slide>
        )}
      </SectionWrapper>
    </div>
  );
};

export default Project;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    line-height: 100%;
    justify-self: flex-start;
    margin: 0 0 0 20px;

    color: rgb(25, 118, 210);
    //  color: rgb(0, 46, 84);
    @media only screen and (max-width: 850px) {
      font-size: 1.3rem;
    }
  }
`;
const Techs = styled.div`
  display: flex;
  padding: 10px;
  background-image: linear-gradient(62deg, #00499266 0%, #000000ae 150%);
  border-radius: 10px 10px 0 10px;
  svg {
    margin-right: 10px;
    height: 30px;
    width: 30px;

    @media only screen and (max-width: 850px) {
      margin-right: 5px;
      width: 20px;
      height: 20px;
    }
  }
`;

const SectionWrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  width: 65vw;
  max-width: 800px;
  border: 1px solid rgb(25, 118, 210);
  // border: 1px solid rgb(25, 118, 210);

  border-radius: 10px;
  @media only screen and (max-width: 650px) {
    width: 95vw;
  }
  z-index: 11;
  display: flex;
  flex-direction: column;
  position: relative;
  &:after {
    content: '';

    border-radius: 10px;

    background-color: transparent;
    // background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
  .content-container {
    p {
      font-weight: 100;
      color: whitesmoke;
      margin: 0;
      padding: 20px;
    }
    width: 100%;

    display: flex;
    flex-direction: column;
  }
`;
