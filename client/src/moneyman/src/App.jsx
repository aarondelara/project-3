import { useState } from 'react'
import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import navBar from './componets/navBar'
import home from './componets/pages/home'


const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [count, setCount] = useState(0)


  return (
    <ApolloProvider client={client}>
      <Router>
        <navBar />
        <Routes>
          <Route
            path={"/signup"}
            element={Signup} />
          <Route
            path={"/home"}
            element={<home />} />
        </Routes>
      </Router>


    // </ApolloProvider>


  )
}

export default App
