import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes";
import Header from "./Components/common/Header";
const isNotLoginPage=!window.location.href.includes('auth')
import "./App.css";

function App() {
  
  return (
    <>
    { isNotLoginPage&&<Header/>}
    <RouterProvider router={routes} />
    </>
  );
}

export default App;
