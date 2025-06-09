import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 80rem) {
    max-width: 80rem;
  }

  @media screen and (min-width: 96rem) {
    max-width: 85rem;
  }
`;

interface Props {
  children: React.ReactNode;
  className?: string; // Make sure to include className in the props
}

const Container = ({ children, className }: Props) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
