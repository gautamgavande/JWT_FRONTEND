import ReactDOM from 'react-dom/client';
import React,{ createContext,useEffect, useState } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import { BrowserRouter,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export const CountContext = createContext();

const ProfileProvider = ({ children }) => {
  const [data,setdata]=useState([])

  const navigate = useNavigate();

  const GetProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/me',{ withCredentials: true })
      // .then(res =>  console.log(res))
      console.log("response",response.data);
      setdata(response.data)
      if (response.data.name === "JsonWebTokenError") {
        navigate('/');
      }
      // else if(response.data.role==="hr"){
      //   navigate('/hr')
      // }
      // else if(response.data.role==="admin"){
      //   navigate("/admin")
      // }
      // else if(response.data.role==="student"){
      //   navigate("/student")
      // }
      // else if(response.data.role==="teacher"){
      //   navigate("/teacher")
      // }


    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetProfile();
  }, []);

  return (
    
    <CountContext.Provider  value={data}>
      {children}
    </CountContext.Provider>
   
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <ProfileProvider>
    <App />
  </ProfileProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
