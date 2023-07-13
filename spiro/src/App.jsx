/* eslint-disable no-mixed-spaces-and-tabs */
import Home from "./pages/Home"
import Spirotherapie from "./pages/Spirotherapie"
import About from "./pages/About"
import Services from "./pages/Services"
import { Routes, Link, Route } from 'react-router-dom'


function App() {
	return (
	  <div>
		<div className="flex gap-2 justify-center ">
		<Link className="hover:underline" to="/">Acceuil</Link>
		<Link className="hover:underline" to="/spirotherapie">La spirothérapie</Link>
		<Link className="hover:underline" to="/about">Mon itinéraire</Link>
		<Link className="hover:underline" to="/services">Mes services</Link>
		</div>
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