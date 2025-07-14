import FooterNav, { LinksOne, LinksTwo } from '../navigation/FooterNav';
import siteConfig from '../../site-config';
import Container from './Container';
import styled from 'styled-components';
import SiteLogo from '../common/Logo/Logo';
import Typography from '../typography/Typography';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  color: var(--text-white);
  //background-color: var(--secondary);
  font-size: 0.875rem;

  a {
    color: var(--text-white);
    font-size: 0.875rem;
    text-decoration: none;
  }
`;

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 90rem;
`;

const FooterCol1 = styled.div`
  p {
    font-weight: 600;
    max-width: 50%;
    padding-top: 20px;
    padding-bottom: 120px;

    &:last-of-type {
      padding-top: 0;
      padding-bottom: 0;
      color: var(--gray);
    }
  }
`;

const FooterCol2 = styled.div`
  display: flex;
  gap: 4rem;
  padding-left: 2rem;

  a {
    position: relative;
    display: inline-flex;
    font-size: 18px;
    font-weight: 400;
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

    &:hover {
      color: var(--gold);
      &:before {
        width: 100%;
      }
    }
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterCol1>
          <SiteLogo />
          <Typography variant="body1" textColor="white">
            Get out there & discover your next slope, mountain & destination!
          </Typography>
          <Typography variant="body1" textColor="gray">
            &copy; {year} Copyright - {siteConfig.siteName}
          </Typography>
        </FooterCol1>
        <FooterCol2>
          <div>
            <Typography variant="h6" textColor="gold">
              More on The Blog
            </Typography>
            <FooterNav data={LinksOne} />
          </div>
          <div>
            <Typography variant="h6" textColor="gold">
              More on Paddy Hiker
            </Typography>
            <FooterNav data={LinksTwo} />
          </div>
        </FooterCol2>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
