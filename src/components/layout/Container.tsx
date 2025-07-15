import styled from 'styled-components';

interface WrapperProps {
  maxWidth?: string;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  padding-left: 1rem;
  padding-right: 1rem;
`;

interface Props {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string; // Add maxWidth here
}

const Container = ({ children, className, maxWidth }: Props) => {
  return (
    <Wrapper className={className} maxWidth={maxWidth}>
      {children}
    </Wrapper>
  );
};

export default Container;
