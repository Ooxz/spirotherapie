/* eslint-disable no-mixed-spaces-and-tabs */
import portrait from '../images/portrait.jpg'

function About() {
	return (
		<div className="mt-10 p-2 flex flex-col items-center">
			<h1 className="font-bold text-4xl text-center">MON ITINERAIRE</h1>
			<div className="mt-10 flex items-center">
				<div className='max-w-xl w-96'>
			<p className="w-90">Passionnée de voyage , de transmission et de la compréhension de l'être humain.</p>
			<br />
			<p>Après 32 ans de riches expériences dans le domaine touristique avec un terrain de jeu privilégié” le Canada et le grand Nord “, développement création  de concept 
				touristique , conference, commercialisation, analyse des marchés  groupe </p> 
				<br />
			   <p>Evolution vers la  transmission du bien être , du bien vieillir de la prévention en 
			   santé ,formation en  Yoga Thérapie avec Stephanie Billard formation 
			   en spirotherapie  et mobilité sur chaises avec Samule Ganes 
			   création de la société  Inspir’ BY pat</p>
			    

</div>
<img className="w-96 ml-5 rounded-full" src={portrait}></img>
</div>
		</div>
	)
  }

  export default About