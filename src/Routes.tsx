import { IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router';
import UXSandbox from './pages/ux-sandbox/UXSanbox';

export enum PublicRoutesEnum {}
export enum PrivatesRoutesEnum {}
export enum AuthRoutesEnum {}

export default function Routes() {
  // todo: in case that we use authorization
  const user = true;

  return (
    <>
      <IonRouterOutlet id="main">
        {user
          ? PrivatesRoutes.map((route) => route)
          : AuthRoutes.map((route) => route)}

        <Route component={UXSandbox} path="/ux-sandbox" exact={true} />
        <Route
          component={UXSandbox}
          path="/ux-sandbox/:componentName"
          exact={true}
        />

        <Redirect to="/" />
      </IonRouterOutlet>
    </>
  );
}

const PrivatesRoutes: JSX.Element[] = [];

const AuthRoutes: JSX.Element[] = [];

const PublicRoutes: JSX.Element[] = [];
