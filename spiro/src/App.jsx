/* eslint-disable no-mixed-spaces-and-tabs */
import Home from "./pages/Home"
import About from "./pages/About"
import { Routes, Link, Route } from 'react-router-dom'


function App() {
	return (
	  <div>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Routes>
			<Route exact path ="/" element={<Home />}/>
			<Route path ="/about" element={<About />}/>
		</Routes>
	  </div>
	)
  }

  export default App