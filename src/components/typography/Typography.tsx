import styled from 'styled-components';
import { ElementType, forwardRef, ReactNode } from 'react';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';

export type TypographyProps = {
  variant?: TypographyVariant;
  children: ReactNode;
  component?: ElementType;
  align?: 'none' | 'left';
  textColor?: 'default' | 'white' | 'primary' | 'secondary';
  className?: string;
};

const variantStyles = {
  h1: `
    font-size: var(--heading-h1);
    font-weight: 700;
  `,
  h2: `
    font-size: var(--heading-h2);
    font-weight: 600;
  `,
  h3: `
    font-size: var(--heading-h3);
    font-weight: 500;
  `,
  h4: `
    font-size: var(--heading-h4);
    font-weight: 500;
  `,
  h5: `
    font-size: var(--heading-h5);
    font-weight: 500;
  `,
  h6: `
    font-size: var(--heading-h6);
    font-weight: 500;
  `,
  body1: `
    font-size: var(--body-base);
  `,
  body2: `
    font-size: var(--body-base);
  `,
};

const alignStyles = {
  none: '',
  left: 'text-align: left',
};

const textColorStyles = {
  default: `color: var(--text-color);`,
  white: `color: var(--hero-white);`,
  primary: `color: var(--primary-color);`,
  secondary: `color: var(--secondary-color);`,
};

const Typography = styled.p<TypographyProps>`
  ${({ variant = 'body1', align = 'none', textColor = 'default', className }) => `
    ${variantStyles[variant]}
    ${alignStyles[align]}
    ${textColorStyles[textColor]}
    margin: 0;
    padding-bottom: 1rem;
    ${className}
  `}
`;

const variantMapping: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
};

const TypographyComponent = forwardRef<HTMLElement, TypographyProps>(
  ({ variant, textColor, align, component, children, ...props }, ref) => {
    const Component = component || variantMapping[variant || 'body1'];

    return (
      <Typography as={Component} variant={variant} textColor={textColor} align={align} ref={ref} {...props}>
        {children}
      </Typography>
    );
  },
);

export default TypographyComponent;
