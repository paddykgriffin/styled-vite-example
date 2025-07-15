import FooterNav, { LinksOne, LinksTwo } from '../navigation/FooterNav';
import siteConfig from '../../site-config';
import Container from './Container';
import styled from 'styled-components';
import SiteLogo from '../common/Logo/Logo';
import Typography from '../typography/Typography';
import useWindowSize from '@/hooks/useWindowSize';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-white);
  font-size: 0.875rem;

  @media (min-width: 768px) {
    padding-bottom: 2rem;
  }

  a {
    color: var(--text-white);
    font-size: 0.875rem;
    text-decoration: none;
  }
`;

const FooterContainer = styled(Container)`
  display: grid;
  max-width: 100%;
  @media (min-width: 768px) {
    max-width: 90rem;
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FooterCol1 = styled.div`
  p {
    font-weight: 600;
    line-height: 1.5;
    padding-top: 20px;
    padding-bottom: 40px;
    @media (min-width: 992px) {
      max-width: 50%;
      padding-bottom: 120px;
      line-height: 1.2;
    }

    &:last-of-type {
      display: none;
      padding-top: 0;
      padding-bottom: 0;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }
`;

const FooterCol2 = styled.div`
  display: flex;
  gap: 4rem;
  padding-left: 0;
  flex-direction: row;

  @media (min-width: 768px) {
    padding-left: 2rem;
  }

  h6 {
    font-size: 1.125rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

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

const MobileCopyRight = styled.div`
  display: block;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media (min-width: 768px) {
    display: none;
    padding-top: 1rem;
    text-align: center;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  const { width } = useWindowSize();

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterCol1>
          <SiteLogo />
          <Typography variant="body1" textColor="white">
            Get out there & discover your next slope, mountain & destination!
          </Typography>
          <Typography variant="body1" textColor="white">
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
        {width && width <= 768 && (
          <MobileCopyRight>
            <Typography variant="body1" textColor="gray">
              &copy; {year} Copyright - {siteConfig.siteName}
            </Typography>
          </MobileCopyRight>
        )}
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
