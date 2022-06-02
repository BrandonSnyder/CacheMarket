import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Market from './pages/Market';
import CreatePostForm from './components/createPostForm/CreatePostForm'
import LikedItems from './components/likedItems/LikedItems';
import CacheNav from "./components/Navbar/Navbar.js";
import Cart from './components/ItemCart/Cart';
import Signup from './components/signup/Signup.js';

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CacheNav />
      <Cart />
      <Market/>
      <Signup/>
      <CreatePostForm/>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<LikedItems />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
