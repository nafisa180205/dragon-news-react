import {
    createBrowserRouter
  } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayouts></HomeLayouts> ,
    },
    {
        path: "/news",
        element: <div>news</div>
    },
    {
        path: "/auth",
        element: <div>auth</div>
    },
    {
        path: "/*",
        element: <div>error</div>
    },
  ]);
  
  export {router}