/* eslint-disable no-mixed-spaces-and-tabs */
import Home from "./pages/Home"
import Spirotherapie from "./pages/Spirotherapie"
import About from "./pages/About"
import Services from "./pages/Services"
import { Routes, Link, Route } from 'react-router-dom'


function App() {
	return (
	  <div>
		<Link to="/">Acceuil</Link>
		<Link to="/spirotherapie">La spirothérapie</Link>
		<Link to="/about">Mon parcours</Link>
		<Link to="/services">Mes services</Link>
		<Routes>
			<Route exact path ="/" element={<Home />}/>
			<Route path ="/spirotherapie" element={<Spirotherapie />}/>
			<Route path ="/about" element={<About />}/>
			<Route path ="/services" element={<Services />}/>
		</Routes>
	  </div>
	)
  }

  export default App