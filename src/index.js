import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App/App.jsx';
=======
import 'semantic-ui-css/semantic.min.css';

import Routes from './components';
>>>>>>> b8dfde3742dd5164a7c05f016f3346fbf9bd0c54
import registerServiceWorker from './registerServiceWorker';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8081/graphql',
});

const client = new ApolloClient({ networkInterface });

<<<<<<< HEAD
ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
=======
const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));
>>>>>>> b8dfde3742dd5164a7c05f016f3346fbf9bd0c54
registerServiceWorker();
