import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PageBase from './components/layouts/PageBase';
import AppContextProvider from './contexts';
import pages from './pages';
// import queryString from 'querystring';

// const { token } = queryString.parse(location.search.replace('?', ''));
// if (token && window.location.pathname === '/') {
//   const userData = JSON.parse(atob(token.split('.')[1]));
//   setToken(token);
//   setExpireTime(userData.exp);
//   setUserData(userData);
//   location.href = `/`;
// }

export const MainPages = () => (
  <PageBase>
    <Switch>
      <Route component={pages.Home} exact path="/" />
      <Route component={pages.Learn} exact path="/kelas-online" />
      <Route component={pages.Register} exact path="/register" />
      <Route component={pages.Verification} exact path="/verification" />
      <Route component={pages.Login} exact path="/login" />
      <Route component={pages.Solution} exact path="/solusi-harga" />
      <Route component={pages.AccountLogin} exact path="/login-user" />
      <Route component={pages.AccountRegister} exact path="/register-user" />
      <Route component={pages.ForgotPassword} exact path="/lupa-password" />
      <Route component={pages.ChangePassword} exact path="/reset-password" />
      <Route component={pages.Error404} />
    </Switch>
  </PageBase>
);

const App = ({ history, store }) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <AppContextProvider>
          <Switch>
            <Route component={MainPages} />
          </Switch>
        </AppContextProvider>
      </Router>
    </Provider>
  );
};

export default hot(App);

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
