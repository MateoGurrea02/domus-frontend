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
import PropertyDetail from './pages/PropertyDetail.jsx';
import UserList from './pages/admin/UserList.jsx';
import ClientList from './pages/admin/ClientList.jsx';
import PropertyList from './pages/admin/PropertyList.jsx';
import RentalSearch from './pages/RentalSearch.jsx';
import PropertySearch from './pages/PropertySearch.jsx';
import NewClient from './pages/admin/AddClient.jsx';
import NewProperty from './pages/admin/NewProperty.jsx';
import UserProvider from "./context/UserContext";
import { IsLogged } from "./utils/IsLogged.jsx";
import { IsUser } from './utils/IsUser.jsx';
import { IsAdminRoute } from './utils/IsAdmin.jsx';
import NewRentalSale from './pages/admin/NewRentalSale.jsx';
import NewPropertySale from './pages/admin/NewPropertySale.jsx';
import { IsAdminOrAgentRoute } from './utils/IsAdminOrAgent.jsx';
import { IsClientRoute } from './utils/IsClient.jsx';
import MyProperties from './pages/MyProperties.jsx';

AOS.init();

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element:<IsLogged><Login /></IsLogged>,
  },
  {
    path: "/register",
    element: <IsLogged><Register/></IsLogged>,
  },
  {
    path:"/admin/rentals/",
    element: <IsAdminRoute><RentalList/></IsAdminRoute>,
  },
  {
    path:"/admin/users/",
    element: <IsAdminOrAgentRoute><UserList/></IsAdminOrAgentRoute>,
  },
  {
    path:"/admin/clients/",
    element: <IsAdminOrAgentRoute><ClientList/></IsAdminOrAgentRoute>,
  },
  {
    path:"/admin/properties/",
    element: <IsAdminOrAgentRoute><PropertyList/></IsAdminOrAgentRoute>,
  },
  {
    path:"/property/detail",
    element: <PropertyDetail/>,
  },
  {
    path:"/rental-search/",
    element: <RentalSearch/>,
  },
  {
    path:"/property-search/",
    element: <PropertySearch/>,
  },
  {
    path:"/new-rental-sale/",
    element:<IsAdminOrAgentRoute><NewRentalSale/></IsAdminOrAgentRoute>,
  },
  {
    path:"/new-property-sale/",
    element:<IsAdminOrAgentRoute><NewPropertySale/></IsAdminOrAgentRoute>,
  },
  {
    path:"/new-client/",
    element: <IsAdminOrAgentRoute><NewClient/></IsAdminOrAgentRoute>,
  },
  {
    path:"/new-property/:id?/:isFromEdition?",
    element:<IsAdminOrAgentRoute><NewProperty	/></IsAdminOrAgentRoute>,
  },
  {
    path:"/properties/client/:id",
    element:<IsClientRoute><MyProperties/></IsClientRoute>,
  },
]

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
    <UserProvider>
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
    </UserProvider>
    </Router>
  </StrictMode>,
)
