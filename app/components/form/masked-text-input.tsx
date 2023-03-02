import type {HTMLInputTypeAttribute} from 'react';
import InputMask from 'react-input-mask';

export type Props = {
  label: string;
  name: string;
  id: string;
  mask: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
};

const MaskedTextInput = ({label, name, id, mask, type, required}: Props) => (
  <div className="w-full space-y-2">
    <label htmlFor={id} className="text-sm">
      {label}{' '}
      {!required && <span className="text-white/50">(Не обязательно)</span>}
    </label>
    <InputMask
      mask={mask}
      type={type}
      id={id}
      name={name}
      required={required}
      className="bg-white/5 px-4 py-2 border border-white/10 rounded w-full"
    />
  </div>
);

export default MaskedTextInput;
