import { createContext, useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import axios from 'axios';
import Router from './Router';
import ScrollToTop from './ScrollToTop';
import getUser from './Components/Getting/getUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';

export const GeneralContext = createContext();

function App() {
  const [details, setDetails] = useState(false);
  const [data, setData] = useState('');
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('')
  const [theUser, setTheUser] = useState(null)
  const [search, setSearch] = useState('')
  
  const theToken = localStorage.getItem('token')
  
  useEffect(() => {
    if (theToken) {
      setToken(theToken)
    }
  }, [theToken])

  useEffect(() => {
      if (token) {
        console.log("Token found:", token);
        getUser(token)
          .then((data) => {
            setTheUser(data);
          })
          .catch((error) => {
            toast.error('Error fetching user in TheUserProvider:', error);
          });    
        }        
  }    
  , [token]);


  useEffect(() => {
    axios.get('http://localhost:1601/products')
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => {
            toast.error(error.response.data.message)
        })
  }, [])

  
  return (
    <GeneralContext.Provider value={{details, data, setDetails, setData, products, setToken, token, theUser, search, setSearch}}>
      <Navbar />
      <ScrollToTop />
      <Router />
      <Footer />
      <ToastContainer />
    </GeneralContext.Provider>
  );
}

export default App;
