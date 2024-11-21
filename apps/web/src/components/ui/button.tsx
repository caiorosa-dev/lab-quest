import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

import { cn } from '@/helpers/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        accent:
          'bg-card-foreground dark:bg-accent text-accent dark:text-white shadow-sm hover:bg-accent-foreground/80 dark:hover:bg-accent/80',
        ghost: 'hover:bg-secondary hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
        rounded: 'rounded-full py-3',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

type ButtonIconProps = {
  isLoading?: boolean;
  className?: string;
  icon?: React.FC<{ className?: string }>;
  side?: 'left' | 'right';
};

const ButtonIcon = ({
  isLoading,
  icon: Icon,
  className,
  side = 'left',
}: ButtonIconProps) => {
  const iconClassName = cn([
    className || 'h-4 w-4',
    { 'mr-3': side === 'left', 'ml-3': side === 'right' },
    isLoading && 'animate-spin',
  ]);

  return (
    <>
      {isLoading ? (
        <Loader2 className={iconClassName} />
      ) : (
        Icon && <Icon className={iconClassName} />
      )}
    </>
  );
};

export { Button, ButtonIcon, buttonVariants };
