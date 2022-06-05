
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache,createHttpLink } from "@apollo/client";
import { Provider } from 'react-redux';
import store from './utils/store';
import Market from "./pages/Market";
import CreatePostForm from "./components/createPostForm/CreatePostForm";
import LikedItems from "./components/likedItems/LikedItems";
import CacheNav from "./components/Navbar/Navbar.js";
import Cart from "./components/ItemCart/Cart";
import Signup from "./components/signup/Signup.js";
import ContactUs from "./components/contactUs/ContactUs";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';


const httpLink = new createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
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
  return (
    <ApolloProvider client={client}>
      
      


      <Router>
      
      
        <div className="flex-column justify-center align-center min-100-vh ">
        <CacheNav />
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
