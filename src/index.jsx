import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

const HomeContainer = React.lazy(() => import('@src/routes/HomeContainer.jsx'));

/**
 * Load plugin
 */
import '@src/plugins/fontawesome.js';

/**
 * Load assets
 */
import '@src/assets/style/index.scss';

/**
 * Load store
 */
import {store, persistor} from '@src/store.js';
import ROUTE from '@src/assets/definitions/routeMap.js';

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={ROUTE.HOME} element={<HomeContainer/>}/>
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

render((<Main />), document.getElementById('main'));
