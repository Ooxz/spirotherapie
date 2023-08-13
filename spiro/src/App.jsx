/* eslint-disable no-mixed-spaces-and-tabs */
import Home from "./pages/Home"
import Spirotherapie from "./pages/Spirotherapie"
import About from "./pages/About"
import Services from "./pages/Services"
import { Routes, NavLink, Route } from 'react-router-dom'


function App() {
	return (
	  <div>
		<div className="flex gap-2 justify-center ">
		<NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}  to="/" >Accueil</NavLink>
		<NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/spirotherapie">La spirothérapie</NavLink>
		<NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/about">Mon itinéraire</NavLink>
		<NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/services">Mes services</NavLink>
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