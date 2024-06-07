export default function Select({
  children,
  name,
  id,
  label,
  disabled,
  placeholder,
  onChangeValue,
}: SelectProps) {
  function handleSelectValue(event: { target: { value: string } }) {
    onChangeValue?.(event.target.value);
  }

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <select
        disabled={disabled}
        name={name}
        id={id}
        onChange={handleSelectValue}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {placeholder && (
          <option disabled selected>
            {placeholder}
          </option>
        )}
        {children}
      </select>
    </>
  );
}

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  placeholder?: string;
  onChangeValue?: (value: string) => void;
}
