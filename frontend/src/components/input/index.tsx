import React, { useMemo } from 'react';
import { InputProps } from 'types/components';

export const Input: React.FC<InputProps> = ({
  name,
  type = 'text',
  label,
  onChange,
  values,
  autoFocus,
  onBlur,
  placeholder,
  onKeyDown,
  defaultValue,
  touches,
  errors,
  className,
  disabled,
}) => {
  const isInvalid = useMemo(() => {
    return touches?.[name] && errors?.[name];
  }, [touches, errors, name]);

  return (
    <div className='space-y-1 relative'>
      <label
        htmlFor={name}
        className={`text-[14px] font-bold text-blue-900 tracking-wider`}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={values?.[name]}
        autoFocus={autoFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        defaultValue={defaultValue}
        onWheel={(e: any) => e.target.blur()}
        className={
          className
            ? className
            : 'flex items-center px-2 pl-4 py-1 md:py-2.5 border focus:outline-none focus:border-gray-700 border-pureWhite/30 rounded-md text-[14px] bg-pureBlack/30 text-textGray w-full h-fit'
        }
        disabled={disabled}
      />
      {isInvalid ? (
        <div
          style={{ color: '#ef4444' }}
          className='font-semibold text-[11px] tracking-wider absolute -bottom-4'
        >
          {errors[name]}
        </div>
      ) : null}
    </div>
  );
};
