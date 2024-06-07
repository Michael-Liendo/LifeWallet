import { IonContent, IonPage } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { ButtonDemo } from '.';

interface Component {
  component: () => JSX.Element;
  name: string;
}

const components: Component[] = [{ name: 'button', component: ButtonDemo }];

type SortedComponent = { name: string };

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
          <select
            value={componentName}
            onChange={(event) =>
              history.push(`/ux-sandbox/${event.target.value}`)
            }
            name="component-selection"
            id="component-selection"
          >
            <option disabled selected>
              {' '}
              -- select an option --{' '}
            </option>
            {components.sort(sortedByName).map((component) => (
              <option key={component.name} value={component.name}>
                {component.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mx-96 border rounded-lg">
          {RenderComponent && <RenderComponent />}
        </div>
      </IonContent>
    </IonPage>
  );
}
