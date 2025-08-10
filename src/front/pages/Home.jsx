import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "../home.css";
import HeroShowcase from "../components/HeroShowcase"; // ajusta la ruta

export const Home = () => {
const handleBook = () => {
    // navega a la vista de reserva o abre modal
    // e.g., navigate("/book") si usas React Router
    console.log("Book Now clicked");
  };

	return (
		<div className="fondoMain">
<HeroShowcase onBook={handleBook} />
		</div>

	);
}; 