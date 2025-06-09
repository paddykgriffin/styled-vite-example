import useCurrentTheme from '@/hooks/useCurrentTheme';
import { Button as OriginalButton } from '@/components/common/Button/Button';

import siteConfig from '@/site-config';
import styled from 'styled-components';

const Button = styled(OriginalButton)`
  border-radius: 0.75rem;
  cursor: pointer;
  color: ${({ theme }) => (theme.mode === 'dark' ? 'white' : 'black')};
  background: transparent;
  border: solid 0px currentColor;
  width: 40px;
  height: 40px;
  padding: 0;

  &:hover {
    border-radius: 1rem;
    color: white;
  }
`;

const IconMoon = styled.svg`
  transition-property: all;
  width: 24px;
  height: 24px;
  rotate: calc(0deg * -1);
  scale: 100% 100%;
  & g {
    fill: ${({ theme }) => (theme.mode === 'dark' ? 'white' : 'white')};
  }
  & path {
    stroke: ${({ theme }) => (theme.mode === 'dark' ? 'white' : 'white')};
  }
`;

const IconSun = styled.svg`
  transition-property: all;
  width: 24px;
  height: 24px;
  rotate: calc(0deg * -1);
  scale: 100% 100%;
  & g {
    stroke: ${({ theme }) => (theme.mode === 'dark' ? 'white' : 'black')};
  }
`;

const ScreenReaders = styled.span`
  display: none;
`;

const IconWrapper = styled.div`
  position: relative;
`;

export function ModeToggle() {
  const { currentTheme, toggleTheme } = useCurrentTheme();

  if (siteConfig.darkMode === false) {
    return null;
  }

  return (
    <Button onClick={toggleTheme} variant="icon">
      <IconWrapper>
        {currentTheme === 'dark' ? (
          <IconMoon viewBox="0 0 24 24">
            <g fill-opacity="0">
              <path d="M15.22 6.03l2.53 -1.94l-3.19 -0.09l-1.06 -3l-1.06 3l-3.19 0.09l2.53 1.94l-0.91 3.06l2.63 -1.81l2.63 1.81l-0.91 -3.06Z">
                <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1"></animate>
              </path>
              <path d="M19.61 12.25l1.64 -1.25l-2.06 -0.05l-0.69 -1.95l-0.69 1.95l-2.06 0.05l1.64 1.25l-0.59 1.98l1.7 -1.17l1.7 1.17l-0.59 -1.98Z">
                <animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"></animate>
              </path>
            </g>
            <path
              fill="none"
              stroke-dasharray="56"
              stroke-dashoffset="56"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z"
            >
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></animate>
            </path>
          </IconMoon>
        ) : (
          <IconSun viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path
                fill-opacity="0"
                stroke-dasharray="36"
                stroke-dashoffset="36"
                d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"
              >
                <animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.5s" values="0;1"></animate>
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></animate>
              </path>
              <path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1" opacity="0">
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.6s"
                  dur="0.2s"
                  values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                ></animate>
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0"></animate>
                <set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></set>
                <animateTransform
                  attributeName="transform"
                  dur="30s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                ></animateTransform>
              </path>
              <path
                stroke-dasharray="2"
                stroke-dashoffset="2"
                d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
                opacity="0"
              >
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.8s"
                  dur="0.2s"
                  values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                ></animate>
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></animate>
                <set fill="freeze" attributeName="opacity" begin="0.8s" to="1"></set>
                <animateTransform
                  attributeName="transform"
                  dur="30s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                ></animateTransform>
              </path>
            </g>
          </IconSun>
        )}
      </IconWrapper>

      <ScreenReaders>{currentTheme === 'dark' ? 'Turn on light mode' : 'Turn off light mode'}</ScreenReaders>
    </Button>
  );
}
