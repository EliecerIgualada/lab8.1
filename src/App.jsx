import Formulario from "./components/Formulario"
import HolaMundo from "./components/HolaMundo"

import MainBanner from "./components/MainBanner"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Counter from './components/Counter'
import Jobs from './components/Jobs'
import TestimonialsDark from "./components/TestimonialsDark"
import Pricind from "./components/Pricind"
import Membercard from "./components/Membercard"
import NewsLetter from "./components/NewsLetter"
import Footer from "./components/Footer"
import { Helmet } from "react-helmet"
const App = ()=> {
return (
  
// <div></div> 0 <></>
<>
  <Helmet>
    <script src="/js/main.js" async></script>
    <script src="/js/bootsnav.js" async></script>
  </Helmet>
  <Navbar/>
  <MainBanner/>
  <Features />
  <Counter/>
  <Jobs/>
  <TestimonialsDark/>
  <Pricind/>
  <Membercard/>
  <NewsLetter/>
  <Footer/>


  <Formulario/>
  <h1>Hola Mundo</h1>
  <HolaMundo nombre="Este es el Nombre"></HolaMundo>
  <HolaMundo nombre="Juan" apellido="Perez"/>

 
</>
)

}
export default App