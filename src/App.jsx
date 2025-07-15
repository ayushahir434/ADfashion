import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hader from "./header/hader.jsx";
import Section from "./section/section.jsx";
import Section2 from "./section/section2.jsx";
import Section3 from "./section/section3.jsx";
import Footer from "./footer/footer.jsx";
import Login from "./login/login.jsx";
import Register from "./register/register.jsx";
import Contact from "./Contact/Contact.jsx";
import { Outlet } from "react-router-dom";
import About from "./about/about.jsx";


function Layout() {
  return (
    <>
      <Hader />
      <Outlet /> 
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <Section />
                <Section2 />
                <Section3 />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
