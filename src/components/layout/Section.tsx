import styled from 'styled-components';
import Container from './Container';

const SectionWrapper = styled.section`
  width: 100%;
  padding-top: 0;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding-top: 3rem;
  }

  &.section-first {
    @media (min-width: 768px) {
      margin-top: 500px;
    }

    @media (min-width: 992px) {
      margin-top: 700px;
    }

    @media (min-width: 1200px) {
      margin-top: 500px;
    }
  }
`;

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const Section = ({ children, className, style, id }: Props) => {
  return (
    <SectionWrapper className={className} style={style} id={id}>
      <Container maxWidth="80rem">{children}</Container>
    </SectionWrapper>
  );
};

export default Section;
