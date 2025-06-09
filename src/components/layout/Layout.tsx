import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { useEffect } from 'react';
import type React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
  emptyPage?: boolean;
  pageTitle?: string;
}

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainWrapper = styled.main`
  flex: 1;
  height: auto;
`;

const Layout = ({ pageTitle, emptyPage, children }: LayoutProps) => {
  useEffect(() => {
    if (import.meta.env.REACT_APP_PROJECT_NAME) {
      document.title = `${pageTitle} | ${import.meta.env.REACT_APP_PROJECT_NAME}`;
    } else {
      document.title = `${pageTitle} | ${import.meta.env.REACT_APP_SLUG}`;
    }
  }, [pageTitle]);

  return (
    <>
      {emptyPage ? (
        children
      ) : (
        <SiteWrapper>
          <Header />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
        </SiteWrapper>
      )}
    </>
  );
};

export default Layout;
