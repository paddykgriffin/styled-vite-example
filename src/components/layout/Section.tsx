import styled from 'styled-components';
import Container from './Container';

const SectionWrapper = styled.section`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  //min-height: 500px;
`;

interface Props {
  children: React.ReactNode;
  className?: string; // Make sure to include className in the props
}

const Section = ({ children, className }: Props) => {
  return (
    <SectionWrapper className={className}>
      <Container maxWidth="80rem">{children}</Container>
    </SectionWrapper>
  );
};

export default Section;
