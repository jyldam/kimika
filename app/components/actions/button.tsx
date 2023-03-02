import type {ComponentProps} from 'react';

const Button = (props: ComponentProps<'button'>) => (
  <button
    {...props}
    className="flex items-center gap-2 bg-yellow-400 text-black font-bold rounded-full px-8 py-4"
  />
);

export default Button;
