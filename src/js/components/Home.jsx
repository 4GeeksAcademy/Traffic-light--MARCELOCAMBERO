
import React, { useState } from "react";
import  TrafficLights from "./TrafficLights/TrafficLights"

//create your first component
const Home = () => {
	//AQUI VAMOS A CREAR LAS FUNCIONES DEL SEMAFORO
	const [ color, setColor ] = useState("red");



	const buttonColor = () => {
			switch (color) {
				case "red": setColor("yellow");
				break;
				case "yellow": setColor("green");
				break;
				case "green": setColor("red");
				break;
			}
	} 
	const changingColors = (newColor) => {
		setColor(newColor)

	};

		return (
			<>
				<TrafficLights color={color} changingColors={changingColors} />
				<button type="button" onClick={buttonColor} className="btn btn-success">cambio de color</button>
				
			</>
			
		);
};

export default Home;