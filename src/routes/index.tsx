import React, { Suspense } from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';

import PublicLayout from '../pages/_layouts/public';

import { publicRoutes } from './routes';

interface IRouteProps extends RouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

const PublicRoute: React.FC<IRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <PublicLayout>
      <Suspense fallback={<h1>loading</h1>}>
        <Route
          {...rest}
          render={props => {
            return <Component {...props} />;
          }}
        />
      </Suspense>
    </PublicLayout>
  );
};

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map(route => (
          <PublicRoute
            path={route.path}
            exact
            key={route.name}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
