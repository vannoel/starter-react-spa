import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import '@src/plugins/fontawesome.js';
import { store, persistor } from '@src/plugins/redux.js';

import '@src/assets/style/index.scss';
import { ROUTE } from '@src/assets/definitions';

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path={ROUTE.HOME} component={React.lazy(() => import('@src/routes/HomeContainer.jsx'))} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Switch>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

render(<Main />, document.getElementById('main'));
