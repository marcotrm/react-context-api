import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "../components/contexts/AlertContext";

const initialData = {
  name: "",
  ingredients: "",
  price: "",
  image: "",
};

function Menu() {
  const [menu, setMenu] = useState([]);
  const [pizza, setPizza] = useState(initialData);
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  function fetchData() {
    axios.get("http://localhost:3000/posts").then((res) => setMenu(res.data));
  }

  useEffect(fetchData, []);

  const handlemenu = (fieldName, value) => {
    setPizza((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/posts", pizza).then((response) => {
      setMenu((prev) => [...prev, response.data]);
      setPizza(initialData);
      showAlert("Pizza aggiunta con successo!", "success");
    });
  };

  //funzione per rimuovere un "prodotto"
  function handleDelete(id) {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then(() =>
        setMenu((current) => current.filter((item) => item.id !== id))
      );
  }

  return (
    <div className="body">
      <div className="menu-container">
        <h1 className="menu-title">Il Nostro Menù</h1>
        <button className="admin-button" onClick={() => navigate("/admin")}>
          MODIFICA
        </button>
        <div className="menu-grid">
          {menu.map((pizza) => (
            <div key={pizza.id} className="menu-item">
              <Link to={`/menu/${pizza.id}`}>
                <img
                  src={`http://localhost:3000${pizza.image}`}
                  alt={pizza.name}
                  className="menu-img"
                />
              </Link>
              <h2>{pizza.name}</h2>
              <p>{pizza.ingredients}</p>
              <span className="menu-price">{pizza.price}</span>
              <div className="btn-delete-container">
                <button onClick={() => handleDelete(pizza.id)}>
                  🗑 Elimina
                </button>
              </div>
            </div>
          ))}
        </div>

        {isAdmin && (
          <>
            <h2>Aggiungi Pizza</h2>
            <form onSubmit={handleSubmitForm} className="pizza-form">
              <input
                type="text"
                placeholder="Inserisci URL immagine"
                value={pizza.image}
                onChange={(event) => handlemenu("image", event.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Inserisci il nome della pizza"
                value={pizza.name}
                onChange={(event) => handlemenu("name", event.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Inserisci gli ingredienti"
                value={pizza.ingredients}
                onChange={(event) =>
                  handlemenu("ingredients", event.target.value)
                }
                required
              />
              <input
                type="text"
                placeholder="Inserisci il prezzo"
                value={pizza.price}
                onChange={(event) => handlemenu("price", event.target.value)}
                required
              />
              <button type="submit">Aggiungi Pizza</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Menu;
