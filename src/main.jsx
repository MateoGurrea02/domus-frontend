import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Home from './pages/Home.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import RentalList from './pages/admin/RentalList.jsx'
import PropertyList from './pages/PropertyList.jsx';
import PropertyDetail from './pages/PropertyDetail.jsx';

AOS.init();

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path:"/admin/rentals/",
    element: <RentalList/>,
  },
  {
    path:"/property",
    element: <PropertyList/>,
  },
  {
    path:"/property/detail",
    element: <PropertyDetail/>,
  }

]

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
        <Routes>
        {
          routes.map(route => (
            <Route
            path={route.path}
            element={route.element}
            key={route.path}
            />))
        }
      </Routes>
    </Router>
  </StrictMode>,
)
