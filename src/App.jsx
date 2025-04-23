import { Outlet } from "react-router";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default App;
