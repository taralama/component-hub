import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';

const InputField = (rest: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...rest}
      className={classNames(
        'bg-white border-[#EEEEEE] rounded',
        {},
        rest.className,
      )}
    />
  );
};

export default InputField;
