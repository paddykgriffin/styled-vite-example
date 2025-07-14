import Layout from '@/components/layout/Layout';
import Typography from '@/components/typography/Typography';
import Section from '@/components/layout/Section';
import { Hero, Content, Title, ScrollIcon, SubTitle } from '@/components/common/Hero/Hero';
import styled from 'styled-components';
import { s3 } from '@/utils/s3';
import { LuArrowRight } from 'react-icons/lu';

const SectionInner = styled.div`
  //min-height: 500px;
  padding-top: 6rem;
  padding-bottom: 12rem;
  & p {
    line-height: 2;
  }
`;

const SectionFirst = styled.div`
  margin-top: 500px;
  //background: red;
  min-height: 500px;
`;

const GridLayout = styled.div`
  display: grid;
  position: relative;
  //background: red;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  & .contents {
    position: relative;
    z-index: 2;
    padding-left: 100px;
    padding-top: 80px;
  }
`;

const WaterMarkNumber = styled.div`
  //background: blue;
  font-weight: 800;
  font-size: 14rem;
  line-height: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  color: rgba(255, 255, 255, 0.1);
`;

const SubHeader = styled.p`
    position: relative;
    color: var(--gold);
    padding-left: 70px;
    padding-bottom: 0;
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    &:before {
    position: absolute;
    top: 50%;
    left: 0;
      content: '';
      display: block;
      width: 50px;
      height: 2px;
      background: var(--gold);
  `;

const RelativeContent = styled.div`
  position: relative;
`;

const ReadMore = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gold);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.875rem;
  position: relative;
  &:hover {
    //color: blue;
    &:before {
      width: 100%;
    }
  }

  &:before {
    display: block;
    position: absolute;
    content: '';
    height: 0.08125em;
    width: 0%;
    transition: width 300ms ease;
    left: 0;
    bottom: -6px;
    background: var(--gold);
  }
`;

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Hero>
        <Content>
          <SubTitle>Welcome to the hills</SubTitle>
          <Title textColor="white">Let the hills take you places</Title>
          <ScrollIcon align="left" />
        </Content>
      </Hero>

      <SectionFirst id="sectionFirst">
        {' '}
        <Section>
          <SectionInner>
            <GridLayout>
              <RelativeContent>
                <WaterMarkNumber>01</WaterMarkNumber>
                <div className="contents">
                  <SubHeader>Get Started</SubHeader>
                  <Typography variant="h2" textColor="white">
                    What kind of Irish hiker are you?
                  </Typography>
                  <Typography variant="body1" textColor="white">
                    Knowing your hiking experience is key when exploring Ireland's trails. From gentle coastal walks to
                    challenging mountain routes, Ireland offers something for every level. Use this guide to find hikes
                    that suit your ability—whether you're a beginner, intermediate, or seasoned hiker—so you can safely
                    enjoy the country's stunning landscapes.
                  </Typography>
                  <ReadMore href="#">
                    Read More <LuArrowRight />
                  </ReadMore>
                </div>
              </RelativeContent>
              <div>
                <img src={s3('01.png')} alt="01" />
              </div>
            </GridLayout>
          </SectionInner>
        </Section>
      </SectionFirst>

      <Section>
        <SectionInner>
          <GridLayout>
            <div>
              <img src={s3('02.png')} alt="01" />
            </div>
            <RelativeContent>
              <WaterMarkNumber>02</WaterMarkNumber>
              <div className="contents">
                <SubHeader>Hiking Essentials</SubHeader>
                <Typography variant="h2" textColor="white">
                  Picking the right hiking gear for Ireland!
                </Typography>
                <Typography variant="body1" textColor="white">
                  The nice thing about beginning hiking is that you don't need much special gear to start—just
                  comfortable, weather-appropriate clothing. If you're in Dublin and want to upgrade your kit, check out
                  local hiking shops like Great Outdoors or Basecamp for expert advice and quality gear. Avoid jeans and
                  heavy clothes, as they can get uncomfortable if wet or sweaty.
                </Typography>
                <ReadMore href="#">
                  Read More <LuArrowRight />
                </ReadMore>
              </div>
            </RelativeContent>
          </GridLayout>
        </SectionInner>
      </Section>
      <Section>
        <SectionInner>
          <GridLayout>
            <RelativeContent>
              <WaterMarkNumber>03</WaterMarkNumber>
              <div className="contents">
                <SubHeader>where you go is the key</SubHeader>
                <Typography variant="h2" textColor="white">
                  Learn your barings and how to read a map
                </Typography>
                <Typography variant="body1" textColor="white">
                  Learning to read a map starts with understanding basic symbols and contour lines, which show elevation
                  and terrain. Practice by comparing your map to the landscape around you—identify hills, rivers, and
                  paths. Use a compass alongside your map to orient yourself and plan your route. Start with simple
                  trails and gradually challenge yourself with more complex routes as your confidence grows.
                </Typography>
                <ReadMore href="#">
                  Read More <LuArrowRight />
                </ReadMore>
              </div>
            </RelativeContent>
            <div>
              <img src={s3('03.png')} alt="01" />
            </div>
          </GridLayout>
        </SectionInner>
      </Section>
    </Layout>
  );
};

export default Home;
