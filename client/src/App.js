import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Default from './layouts/Default';
import Home from './pages/Home';
import About from './pages/About';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';
import NotFound from './pages/NotFound';
import './styles/index.scss'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Default>
          <div className="bg-white">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/matchup"
                element={<Matchup />}
              />
              <Route
                path="/matchup/:id"
                element={<Vote />}
              />
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </div>
        </Default>
      </Router>
    </ApolloProvider>
  );
}

export default App;
