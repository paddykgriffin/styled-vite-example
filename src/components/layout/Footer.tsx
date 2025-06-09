import FooterNav from '../navigation/FooterNav';
import siteConfig from '../../site-config';
import Container from './Container';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  color: var(--text-color);
  background-color: var(--secondary);
  font-size: 0.875rem;

  a {
    color: var(--text-color);
    font-size: 0.875rem;
    text-decoration: none;
  }
`;

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>
        <div>
          &copy; {year} Copyright - {siteConfig.siteName}
        </div>
        <FooterNav />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
