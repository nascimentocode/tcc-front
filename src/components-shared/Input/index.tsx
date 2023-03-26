import classnames from 'classnames';
import React from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  prepend?: string | React.ReactNode;
}

const FOCUS_CLASSES =
  'focus-within:rounded-b-none focus-within:border-b-2 focus-within:border-t-0 focus-within:border-l-0 focus-within:border-r-0 focus-within:border-primary ';

const ERROR_CLASSES =
  'rounded-b-none border-b-2 border-t-0 border-l-0 border-r-0 border-[#DC354550] focus-within:border-b-2';

export function Input({ label, error, prepend, ...props }: IInputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className=" font-montserrat text-base font-normal">
          {label}
        </label>
      )}
      <div
        className={classnames(
          'relative flex items-center justify-between gap-4 rounded-md bg-[#FEFDFD05] px-3 py-4',
          FOCUS_CLASSES,
          error ? ERROR_CLASSES : 'border border-[#FEFDFD10]'
        )}
      >
        {prepend && prepend}
        <input
          className={classnames(
            'w-full bg-[transparent] placeholder:text-[#FEFDFD70] focus:outline-none focus-visible:outline'
          )}
          {...props}
        />
      </div>
    </div>
  );
}
