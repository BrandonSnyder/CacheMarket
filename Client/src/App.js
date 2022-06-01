
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import CreatePostFrom from './components/createPostForm/CreatePostForm'
import LikedItems from './components/likedItems/LikedItems';


import CacheNav from "./components/Navbar/Navbar.js";



const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
      <Market/>
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

    <CacheNav />

    //   <ApolloProvider client={client}>
    //     <Router>
    //       <div className="flex-column justify-center align-center min-100-vh bg-primary">
    //         <Routes>
    //           <Route
    //             path="/"
    //             element={<Home />}
    //           />
    //         </Routes>
    //       </div>
    //     </Router>
    //   </ApolloProvider>

  );
}

export default App;
