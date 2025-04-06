import React from 'react';
import { IButtonProps } from 'types/components';

export const Button: React.FC<IButtonProps> = ({
  name,
  onClick,
  type,
  disabled,
  variant = 'primary',
}) => {
  const getVariantStyles = (variant: IButtonProps['variant']) => {
    switch (variant) {
      case 'primary':
        return 'py-2 px-4 hover:bg-blue-900 bg-darkBlue text-white';

      case 'secondary':
        return 'py-2 px-4 border-2 border-darkBlue text-darkBlue';

      default:
        return null;
    }
  };
  const variantStyles = getVariantStyles(variant);
  return (
    <button
      type={type}
      className={`${variantStyles}  lg:px-6 text-p4 md:text-p2 tracking-widest font-bold rounded-md h-fit`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className='p-0'>{name}</span>
    </button>
  );
};
