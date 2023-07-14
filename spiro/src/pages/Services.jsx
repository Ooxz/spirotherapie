/* eslint-disable no-mixed-spaces-and-tabs */
import inspir from '../images/inspir.png'

function Services() {
	return (
		<div className="mt-10 p-2">
			<h1 className="font-bold text-xl text-center">SERVICES</h1>
			<div className="flex items-center">
			<ul className="mt-10">
				<li>En visio et en ligne</li>
				<li>A domicile à Biarritz</li>
				<li>Cours 30 minutes 7 euros par personne (groupe de minimum 6 personnes)</li>
				<li>Cours 1 heure 14 euros par personne (groupe de minimum 6 personnes)</li>
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