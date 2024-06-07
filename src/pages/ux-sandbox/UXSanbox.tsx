import { IonContent, IonPage } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { ButtonDemo } from '.';
import { SelectDemo } from './demos/SelectDemo';
import Select from '../../components/Select';

const components: Component[] = [
  { name: 'button', component: ButtonDemo },
  { name: 'select', component: SelectDemo },
];

export default function UXSandbox() {
  const { componentName } = useParams<{ componentName: string }>();
  const history = useHistory();

  const RenderComponent = components.find(
    ({ name }) => name === componentName,
  )?.component;

  const sortedByName = (a: SortedComponent, b: SortedComponent) =>
    a.name.localeCompare(b.name);

  return (
    <IonPage>
      <IonContent>
        <div className="flex justify-center mb-20">
          <div className="w-44 mt-3">
            <Select
              value={componentName}
              onChangeValue={(value) => history.push(`/ux-sandbox/${value}`)}
              name="component-selection"
              id="component-selection"
              label="Select a component"
              placeholder="-- select an option --"
            >
              {components.sort(sortedByName).map((component) => (
                <option key={component.name} value={component.name}>
                  {component.name}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="mx-20 border rounded-lg">
          {RenderComponent && <RenderComponent />}
        </div>
      </IonContent>
    </IonPage>
  );
}

type SortedComponent = { name: string };

interface Component {
  component: () => JSX.Element;
  name: string;
}
