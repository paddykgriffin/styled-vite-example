import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';

const buttonVariants = cva('', {
  variants: {
    variant: {
      contained: '',
      destructive: '',
      outline: '',
      ghost: '',
      link: '',
      icon: '',
    },
    size: {
      small: '',
      medium: '',
      large: '',
      icon: '',
    },
    fullWidth: {
      true: '',
    },
    disableElevation: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'contained',
    size: 'medium',
    disableElevation: false,
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type BaseButtonProps = {
  asChild?: boolean;
} & ButtonVariantProps;

type ButtonAsButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchorProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { className, variant, asChild = false, children, ...rest } = props;

  let Comp: React.ElementType;
  let refType: React.Ref<HTMLButtonElement | HTMLAnchorElement>;

  switch (true) {
    case asChild:
      Comp = Slot;
      refType = ref;
      break;
    case 'href' in rest:
      Comp = 'a';
      refType = ref as React.Ref<HTMLAnchorElement>;
      break;
    default:
      Comp = 'button';
      refType = ref as React.Ref<HTMLButtonElement>;
      break;
  }

  return (
    <Comp
      className={cn(
        buttonVariants({
          variant,
          className,
        }),
      )}
      ref={refType}
      {...rest}
    >
      {children}
    </Comp>
  );
});
Button.displayName = 'Button';

export { Button };
export type { ButtonProps, ButtonAsButtonProps };
