import { Slide } from '@mui/material';
import TechLogo from 'components/TechLogo';
import { useRef } from 'react';
import styled from 'styled-components';
import { ProjectData } from '../../screens/Projects/data';
import useOnScrren from '../hooks/useOnScreen';
import Slider from '../Slider';
interface Props extends ProjectData {
  idx: number;
  name: string;
}

const Project = ({ idx, name, imgs, description, techs }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScrren(sectionRef);

  return (
    <div style={{ overflow: 'hidden', paddingTop: '40px' }}>
      <SectionWrapper ref={sectionRef}>
        <Slide timeout={700} direction={idx % 2 === 0 ? 'right' : 'left'} in={idx === 0 ? true : isVisible}>
          <Section>
            <div className="content-container">
              <SectionHeader>
                <h1> {name}</h1>
                <Techs>
                  {techs.map((tech) => (
                    <TechLogo tech={tech} />
                  ))}
                </Techs>
              </SectionHeader>
              <p>{description}</p>
            </div>

            <div className="g">
              <Slider imgs={imgs} resoultionsSlideCount={{ desktop: 2, mobile: 1 }} />
            </div>
          </Section>
        </Slide>
      </SectionWrapper>
    </div>
  );
};

export default Project;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  h1 {
    line-height: 100%;
    justify-self: flex-start;
    margin: 0;
    @media only screen and (max-width: 850px) {
      font-size: 1.3rem;
    }
  }
`;
const Techs = styled.div`
  display: flex;

  svg {
    margin-right: 10px;
    height: 40px;
    width: 40px;

    @media only screen and (max-width: 850px) {
      margin-right: 5px;
      width: 20px;
      height: 20px;
    }
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  width: 65vw;
  min-height: 85vh;
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
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
    opacity: 0.6;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
  .content-container {
    p {
      padding: 10px;
    }
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
