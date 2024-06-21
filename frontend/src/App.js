import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import PrivacyPolicy from './components/PrivacyPolicy';
import DataUsage from './components/DataUsage';

// Utils
import { isAuthenticated } from './utils/auth';

const theme = createTheme({
  // ... (keep your existing theme configuration)
});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <PrivateRoute path="/settings" component={SettingsPage} />
          <PrivateRoute path="/privacy-policy/:appId" component={PrivacyPolicy} />
          <PrivateRoute path="/data-usage/:appId" component={DataUsage} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;