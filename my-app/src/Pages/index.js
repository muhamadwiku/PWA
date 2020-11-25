import React from 'react';

const Suspensed = (Element) =>
  function suspense(props) {
    return (
      <React.Suspense fallback={<div />}>
        <Element {...props} />
      </React.Suspense>
    );
  };

export default {
  AccountLogin: Suspensed(React.lazy(() => import('./AccountLogin'))),
  AccountRegister: Suspensed(React.lazy(() => import('./AccountRegister'))),
  Error404: Suspensed(React.lazy(() => import('./Error404'))),
  Verification: Suspensed(React.lazy(() => import('./Verification'))),
  Home: Suspensed(React.lazy(() => import('./Home'))),
  Learn: Suspensed(React.lazy(() => import('./Learn'))),
  Register: Suspensed(React.lazy(() => import('./Register'))),
  Login: Suspensed(React.lazy(() => import('./Login'))),
  Solution: Suspensed(React.lazy(() => import('./Solution'))),
  ForgotPassword: Suspensed(React.lazy(() => import('./ForgotPassword'))),
  ChangePassword: Suspensed(React.lazy(() => import('./ChangePassword'))),
};
