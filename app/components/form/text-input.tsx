import type {HTMLInputTypeAttribute} from 'react';

export type Props = {
  label: string;
  name: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
};

const TextInput = ({label, name, id, type, required}: Props) => (
  <div className="w-full space-y-2">
    <label htmlFor={id} className="text-sm">
      {label}{' '}
      {!required && <span className="text-white/50">(Не обязательно)</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      className="bg-white/5 px-4 py-2 border border-white/10 rounded w-full"
    />
  </div>
);

export default TextInput;
