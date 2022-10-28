import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import About from './About/About';

import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';

function RoutesComponent (){
  return <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="Profile" element={<Profile />}></Route>
              <Route path="About" element={<About />}></Route>
              <Route path="*" element={<Navigate to ="/"/>}></Route>
            </Routes>
         </BrowserRouter>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RoutesComponent />
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <Home />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
