import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header/Header';
import { useEffect } from 'react';
import type React from 'react';
import styled from 'styled-components';
import siteConfig from '@/site-config';
import { HeaderProvider } from '@/components/layout/Header/HeaderContext';
import { s3 } from '@/utils/s3';

interface LayoutProps {
  children: React.ReactNode;
  emptyPage?: boolean;
  pageTitle?: string;
  disableTransparentHeader?: boolean;
}

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #0b1d26 url(${s3('body-small.png')}) no-repeat;

  @media (min-width: 768px) {
    background: #0b1d26 url(${s3('body.png')}) no-repeat;
  }
`;

const MainWrapper = styled.main`
  flex: 1;
  height: auto;
`;

const Layout = ({ pageTitle, children, disableTransparentHeader }: LayoutProps) => {
  useEffect(() => {
    if (import.meta.env.REACT_APP_PROJECT_NAME) {
      document.title = `${pageTitle} | ${import.meta.env.REACT_APP_PROJECT_NAME}`;
    } else {
      document.title = `${pageTitle} | ${import.meta.env.REACT_APP_SLUG}`;
    }
  }, [pageTitle]);

  useEffect(() => {
    if (!siteConfig.layout.header.transparent || disableTransparentHeader) {
      setTimeout(() => {
        const header = document.getElementById('main-header');
        const siteMain = document.getElementById('site-main');
        if (header && siteMain) {
          siteMain.style.marginTop = `${header.offsetHeight}px`;
        }
      }, 50);
    }
  }, [disableTransparentHeader]);

  return (
    <SiteWrapper>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </SiteWrapper>
  );
};

export default Layout;
