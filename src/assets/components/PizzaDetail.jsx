import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function PizzaDetail() {
  const [pizza, setPizza] = useState(null);
  const [nextPizza, setNextPizza] = useState(null);
  const [prevPizza, setPrevPizza] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setPizza(response.data);
        setIsVisible(true);

        // Fetch adjacent pizzas
        const allPizzas = await axios.get("http://localhost:3000/posts");
        const pizzas = allPizzas.data;
        const currentIndex = pizzas.findIndex((p) => p.id === response.data.id);

        setNextPizza(pizzas[currentIndex + 1]?.id);
        setPrevPizza(pizzas[currentIndex - 1]?.id);
      } catch (error) {
        console.error("Error fetching pizza details:", error);
        navigate("/menu");
      }
    };

    fetchPizza();
    return () => setIsVisible(false);
  }, [id, navigate]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => navigate("/menu"), 300);
  };

  const handleNavigation = (newId) => {
    setIsVisible(false);
    setTimeout(() => navigate(`/menu/${newId}`), 300);
  };

  if (!pizza) return null;

  return (
    <div className="detail-overlay" onClick={handleClose}>
      <div
        className={`detail-container ${isVisible ? "visible" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={handleClose}>
          ✕
        </button>

        {prevPizza && (
          <button
            className="nav-button left"
            onClick={() => handleNavigation(prevPizza)}
          >
            {"<"}
          </button>
        )}

        {nextPizza && (
          <button
            className="nav-button right"
            onClick={() => handleNavigation(nextPizza)}
          >
            {">"}
          </button>
        )}

        <div className="pizza-content">
          <img src={`http://localhost:3000${pizza.image}`} alt={pizza.name} />
          <h2>{pizza.name}</h2>
          <p>{pizza.ingredients}</p>
          <p>{pizza.price}</p>
        </div>
      </div>
    </div>
  );
}

export default PizzaDetail;
