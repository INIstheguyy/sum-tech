import React from "react";
import styles from "./Styles/App.module.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Overview from "./pages/Overview/Overview";
import Location from "./pages/Location/Location";
import System from "./pages/System/System";
import Staff from "./pages/Staff/Staff";
import Devices from "./pages/Devices/Devices";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/Register',
      element:<Register/>
    },
    {
      path:'/',
      element:<Dashboard/>,
      children:[
        {
          path:'/Overview',
          element:<Overview/>
        },
        {
          path:'/Location',
          element:<Location/>
        },
        {
          path:'/System',
          element:<System/>
        },
        {
          path:'/Staff',
          element:<Staff/>
        },
        {
          path:'/Devices',
          element:<Devices/>
        }
      ]
    }
  ])
  return (
    <div className={styles.App}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
