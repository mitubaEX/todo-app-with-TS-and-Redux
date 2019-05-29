import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import store, { history } from './store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route exact path="/:id" component={TodoItem} />
            <Redirect from="*" to="/" />
          </Switch>
        </ConnectedRouter>
      </HashRouter>
    </Provider>
  );
}

export default App;
