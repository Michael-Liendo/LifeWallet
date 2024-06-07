export default function Button({ children, type }: ButtonProps) {
  return (
    <>
      <button type={type}>{children}</button>
    </>
  );
}

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button' | undefined;
}
