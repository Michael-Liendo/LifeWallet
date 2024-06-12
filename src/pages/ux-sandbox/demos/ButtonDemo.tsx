import Button from '../../../components/Button';

export function ButtonDemo() {
  return (
    <>
      <div>
        <Button type="button">Active</Button>
        <Button disabled type="button">
          Disabled
        </Button>
        <Button type="reset">Reset</Button>
        <Button type="submit">Submit</Button>
      </div>
    </>
  );
}
