export type Props = {
  label: string;
  name: string;
  id: string;
  required?: boolean;
};

const TextArea = ({label, name, id, required}: Props) => (
  <div className="w-full space-y-2">
    <label htmlFor={id} className="text-sm">
      {label}{' '}
      {!required && <span className="text-white/50">(Не обязательно)</span>}
    </label>
    <textarea
      id={id}
      name={name}
      required={required}
      rows={5}
      className="bg-white/5 px-4 py-2 border border-white/10 rounded w-full resize-y"
    />
  </div>
);

export default TextArea;
