import "./App.css";
import Master from "./components/MasterLayout/Master";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./components/Notfound/Notfound";
import Home from "./components/Home/Home";
import Cars from "./components/Cars/Cars";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Master />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "cars", element: <Cars /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
