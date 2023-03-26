import classnames from 'classnames';
import React from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined';
  full?: boolean;
}

const VARIANTS = {
  primary: 'bg-primary hover:bg-accent hover:shadow-lg',
  secondary: 'bg-secondary',
  outlined: 'border-primary border-2 text-primary'
};

export function Button({
  variant = 'primary',
  style,
  full,
  ...props
}: IButtonProps) {
  return (
    <button
      className={classnames(
        'flex items-center justify-center gap-4 rounded py-2 px-8 font-bold disabled:cursor-not-allowed disabled:opacity-50',
        VARIANTS[variant],
        full && 'w-full'
      )}
      {...props}
    />
  );
}
