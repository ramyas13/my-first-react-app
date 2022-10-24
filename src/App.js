import {Navbar} from "./Components/Navbar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Carousel} from "./Components/Carousel";
import { Services } from "./Components/Services";
import Contact from "./Components/Contact";
import {About}from "./Components/About";
import {Footer } from "./Components/Footer";
import {Footer1} from "./Components/Footer1";
import  {Blog}  from "./Components/Blog";

function App() {
  return (
    <div style={{padding:"20px"}} >
    <Navbar/>
    <Carousel/>
   <About/>
   <Services></Services>
   <Blog></Blog>
   <Contact/>
   <Footer1/>
  <Footer/>
  </div>
  );
}

export default App;
