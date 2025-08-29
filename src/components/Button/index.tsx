import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import { ButtonProps } from '../../Pages/Todo/type';

const Button = ({
  btnText,
  variant,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className={cn(
        'py-2 px-6',
        {
          'bg-blue-600 text-white': variant == 'primary',
          'border text-blue-500': variant == 'outline',
          '': variant == 'normal',
        },
        rest.className,
      )}
    >
      {btnText}
    </button>
  );
};

export default Button;
