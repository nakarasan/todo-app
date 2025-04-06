export interface IButtonProps {
  name: string;
  onClick?: (e: any) => void;
  type?: any;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export interface InputProps {
  name?: any;
  type?: any;
  label?: any;
  onChange?: any;
  values?: any;
  autoFocus?: any;
  onBlur?: any;
  placeholder?: string;
  onKeyDown?: any;
  defaultValue?: any;
  touches?: any;
  errors?: any;
  disabled?: boolean;
  className?: string;
  readOnly?: boolean;
}

export interface ITextareaProps {
  name: string;
  label?: string;
  rows?: number;
  onChange?: any;
  values?: any;
  errors?: any;
  touches?: any;
  onBlur?: any;
  disabled?: boolean;
  autoFocus?: any;
  className?: any;
  placeholder?: any;
  onKeyDown?: any;
  defaultValue?: any;
  hidden?: any;
}
