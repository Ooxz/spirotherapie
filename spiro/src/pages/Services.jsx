/* eslint-disable no-mixed-spaces-and-tabs */
import inspir from '../images/inspir.png'

function Services() {
	return (
		<div className="mt-10 p-2 flex flex-col items-center">
			<h1 className="font-bold text-4xl text-center">SERVICES</h1>
			<div className="flex items-center">
			<ul className="">
				<li>En visio et en ligne</li>
				<li>A domicile à Biarritz</li>
				<li>Cours 30 minutes 7 euros par personne (groupe de 6 personnes minimum)</li>
				<li>Cours 1 heure 14 euros par personne (groupe de 6 personnes minimum)</li>
				<li>Séance individuelle 50 euros par personne</li>
				<li>Sur devis pour les entreprises</li>
				<li>Les évènements : </li>
			</ul>
			<img className="w-90 ml-5" src={inspir}></img>
			</div>
		</div>
	)
  }

  export default Services