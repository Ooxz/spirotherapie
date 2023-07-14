/* eslint-disable no-mixed-spaces-and-tabs */
import portrait from '../images/portrait.jpg'

function About() {
	return (
		<div className="mt-10 p-2">
			<h1 className="font-bold text-xl">Mon itinéraire</h1>
			<div className="mt-10 flex">
			<p className="w-90">Passionnée de voyage , de transmission et de la compréhension de l'être humain. 
			   Après 32 ans de riches expériences dans le domaine touristique avec un terrain de jeu privilégié 
			   ”le Canada et le grand Nord“, développement création  de concept touristique , conference, commercialisation, 
			   analyse des marchés  groupe Evolution vers la  transmission du bien être , du bien vieillir de la prévention en 
			   santé ,formation en  Yoga Thérapie avec Stephanie Billard formation 
			   en spirotherapie  et mobilité sur chaises avec Samule Ganes 
			   création de la société  Inspir’ BY pat
</p>
<img className="w-90 ml-5" src={portrait}></img>
</div>
		</div>
	)
  }

  export default About