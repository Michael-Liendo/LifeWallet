import Select from '../../../components/Select';
import Spacer from '../../../components/Spacer';

export function SelectDemo() {
  return (
    <>
      <div>
        <Select placeholder="Placeholder">
          <option>First option</option>
        </Select>

        <Spacer y={'3'} />
        <Select disabled placeholder="Placeholder">
          <option>First option</option>
        </Select>
        <Spacer y={'3'} />

        <Select label="Label for select" placeholder="Placeholder">
          <option>First option</option>
        </Select>
        <Spacer y={'3'} />

        <Select label="Disabled" placeholder="Placeholder">
          <option>First option</option>
        </Select>
      </div>
    </>
  );
}
