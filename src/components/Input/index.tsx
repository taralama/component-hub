import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import { JSX, useState } from 'react';

export interface InputFieldProps<T extends FieldValues, U extends FieldPath<T>>
  extends UseControllerProps<T, U> {
  icon?: JSX.Element;
  placeholder?: string;
  type?: string;
  label?: string;
  isLoading?: boolean;
  className: string;
  withBorder?: boolean;
}

const Input = <T extends FieldValues, U extends FieldPath<T>>({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  placeholder,
  disabled,
  type,
  withBorder,
  className,
}: InputFieldProps<T, U>) => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({ name, control, rules, shouldUnregister, defaultValue });

  const today = new Date();
  const minDate = '1900-01-01';
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate(),
  )
    .toISOString()
    .split('T')[0];

  return (
    <>
      <input
        ref={ref}
        {...inputProps}
        onFocus={(e) => {
          e.stopPropagation();
          setIsFocused(true);
        }}
        onBlur={(e) => {
          const trimmedValue = e.target.value.trim();
          inputProps.onChange(trimmedValue);
          setIsFocused(false);
        }}
        id={name}
        name={name}
        type={type || 'text'}
        placeholder={
          type === 'date' ? 'Select Date of Birth' : placeholder || ''
        }
        min={type === 'date' ? minDate : undefined}
        max={type === 'date' ? maxDate : undefined}
        className={`form-control ${
          disabled ? '#949494' : 'bg-white'
        } ${className} ${isFocused ? 'focused-class' : ''}`}
        style={{
          border: invalid
            ? '1px solid rgb(231, 102, 93)'
            : withBorder
            ? '1px solid #eee'
            : '',
          backgroundColor: disabled ? '#eeeeee' : '',
        }}
        disabled={disabled}
        onClick={(e) => e.currentTarget.showPicker()} // Force the calendar picker to open on click
      />
      {rules && invalid && (
        <span className="text-sm  bg-transparent font-medium mt-3 leading-3 text-danger">
          {error?.message}
        </span>
      )}
    </>
  );
};

export default Input;
