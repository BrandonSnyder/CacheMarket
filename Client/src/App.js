import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import CacheNav from "./components/Navbar/Navbar.js";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
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
