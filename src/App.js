import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

export const NavbarValueProvider = createContext();

function App() {
  const [data, setData] = useState();

  const value = {
    data,
    setData,
  };

  return (
    <div>
      <NavbarValueProvider.Provider value={value}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </NavbarValueProvider.Provider>
    </div>
  );
}

export default App;
