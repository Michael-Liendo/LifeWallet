import Button from '../../../components/Button';

export function ButtonDemo() {
  return (
    <>
      <div>
        <h1>Active</h1>
        <Button type="button">Click me!</Button>
        <h1>Disabled</h1>
        <Button disabled type="button">
          Click me!
        </Button>
      </div>
    </>
  );
}
