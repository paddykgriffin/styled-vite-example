import Layout from '@/components/layout/Layout';
import Typography from '@/components/typography/Typography';
import Section from '@/components/layout/Section';
import { Background, Hero, Content, Title, SubTitle, ScrollIcon } from '@/components/common/Hero/Hero';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Hero>
        <Background type="img" src="https://picsum.photos/id/1/1920/800" srcMobile="/images/hero-mobile.png" />
        <Content>
          <Title textColor="white">Main Tagline</Title>
          <SubTitle textColor="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae laborum eum minima itaque
            praesentium.
          </SubTitle>
        </Content>
        <ScrollIcon align="center" />
      </Hero>
      <Section>
        <Typography variant="h1">Heading h1</Typography>
        <Typography variant="h2">Heading h2</Typography>
        <Typography variant="h3">Heading h3</Typography>
        <Typography variant="h4">Heading h4</Typography>
        <Typography variant="h5">Heading h5</Typography>
        <Typography variant="h6">Heading h6</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus rem eum tenetur modi optio accusantium
          repellat cumque facere omnis laudantium, harum est aut alias iure quas obcaecati architecto atque!
        </Typography>
      </Section>
    </Layout>
  );
};

export default Home;
