import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.interceptors.response.use(response => {
  return response;
}, (error: AxiosError) => {

  switch (error.response?.status) {
    case 400:
      // if (error.response?.data.message) {
      //   const errors = error.response?.data.message.split('; ').filter((message:string) => message !== '');
      //   throw errors;
      // }
      toast.error(error.response.data.message, {theme: 'colored'});
      break;
    default:
      toast.error(error.message, {theme: 'dark'});
      break;
  }
  console.log('Interceptor is called')
  return Promise.reject(error);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
