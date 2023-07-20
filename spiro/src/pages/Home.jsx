/* eslint-disable no-mixed-spaces-and-tabs */
import expirez from "../images/expirez.png"

function Home() {
	return (
		<div className="mt-10 flex flex-col items-center">
			<img className="w-8/12" src={expirez}></img>
			<p className="text-3xl font-bold mt-20" >La façon de respirer présage de la façon dont vous vieillirez</p>
		</div>
	)
  }

  export default Home