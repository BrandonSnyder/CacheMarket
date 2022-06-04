import React , {Fragment} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Market from "./pages/Market";
import CreatePostForm from "./components/createPostForm/CreatePostForm";
import LikedItems from "./components/likedItems/LikedItems";
import CacheNav from "./components/Navbar/Navbar.js";
import Cart from "./components/ItemCart/Cart";
import Signup from "./components/signup/Signup.js";
import ContactUs from "./components/contactUs/ContactUs";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CacheNav />
      <Cart />
      <Router>
        <div className="flex-column justify-center align-center min-100-vh ">
          <Routes>            
            <Route path="/" element={<Market />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-post" element={<CreatePostForm />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </ApolloProvider>
  );
}

export default App;
