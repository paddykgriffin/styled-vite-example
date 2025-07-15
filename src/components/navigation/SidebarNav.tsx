import styled from 'styled-components';
import useWindowSize from '@/hooks/useWindowSize';
import { LuHouse, LuMenu, LuX } from 'react-icons/lu';
import { useState, useEffect, useRef } from 'react';
import { HeaderMenuLinks } from '../navigation/HeaderMenuLinks';
import { NavLink } from 'react-router-dom';

const MobileNav = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  background-color: #111;
  padding: 1rem 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 1000;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  padding: 0.5rem;
  z-index: 900;
  position: relative;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 32px;

  a {
    text-decoration: none;
    color: var(--text-white);
    position: relative;
    font-size: 1.2rem;
    padding: 1rem;
    border-top: 1px solid var(--gray);
  }
`;

export default function SidebarNav() {
  const { width } = useWindowSize();
  const safeWidth = width ?? 0;
  const [navOpen, setNavOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close nav on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setNavOpen(false);
      }
    }

    if (navOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navOpen]);

  const toggleNav = () => setNavOpen(prev => !prev);

  return (
    <>
      {safeWidth < 769 && (
        <>
          <Button onClick={toggleNav} ref={buttonRef}>
            <LuMenu size={32} color="white" />
          </Button>
          <MobileNav isOpen={navOpen} ref={navRef}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                padding: '0 0.5rem 0 1rem',
              }}
            >
              <LuHouse size={32} color="white" />
              <Button onClick={toggleNav} ref={buttonRef}>
                <LuX size={32} color="white" />
              </Button>
            </div>
            <NavWrapper>
              {HeaderMenuLinks.map(item => (
                <NavLink to={item.path} key={item.title}>
                  {item.title}
                </NavLink>
              ))}
            </NavWrapper>
          </MobileNav>
        </>
      )}
    </>
  );
}
