import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import App from './components/App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://obedhipolito-obedhipolito.cloud.okteto.net/graphql/'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

