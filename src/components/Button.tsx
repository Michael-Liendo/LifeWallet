export default function Button({ children, type, disabled }: ButtonProps) {
  return (
    <>
      <button
        disabled={disabled}
        className="bg-blue-500 rounded-xl text-white m-1 py-2 px-4 disabled:bg-gray-600"
        type={type}
      >
        {children}
      </button>
    </>
  );
}

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button' | undefined;
}
