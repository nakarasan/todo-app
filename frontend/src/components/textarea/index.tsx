import React, { useMemo } from 'react';
import { ITextareaProps } from 'types/components';

export const TextArea: React.FC<ITextareaProps> = ({
  name,
  label,
  rows,
  onChange,
  values,
  errors,
  touches,
  onBlur,
  disabled,
  autoFocus,
  className,
  placeholder,
  onKeyDown,
  defaultValue,
  hidden,
}) => {
  const isInvalid = useMemo(() => {
    return touches?.[name] && errors?.[name];
  }, [touches, errors, name]);

  return (
    <div className='flex flex-col justify-start items-start gap-1 relative'>
      <label
        htmlFor={name}
        className={`text-[14px] font-bold text-blue-900 tracking-wider ${
          hidden && 'hidden'
        }`}
      >
        {label}
      </label>

      <textarea
        disabled={disabled}
        className={
          className
            ? className
            : 'p-3 rounded-xl border focus:outline-none focus:border-gray-700 w-full text-[14px]'
        }
        id={name}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        autoFocus={autoFocus}
        onBlur={onBlur}
        rows={rows}
        value={values?.[name]}
        onKeyDown={onKeyDown}
        defaultValue={defaultValue}
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
