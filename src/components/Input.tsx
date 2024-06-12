export default function Input({ id, name, label, type, disabled }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        disabled={disabled}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type={type}
      />
    </>
  );
}

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  type?:
    | 'text'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'button'
    | 'time'
    | 'url'
    | 'week'
    | undefined;
}
