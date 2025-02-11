import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../components/contexts/AlertContext";

function AdminPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      credentials.username === "admin" &&
      credentials.password === "password"
    ) {
      // Clear any existing admin status first
      localStorage.clear();
      // Set the new admin status
      localStorage.setItem("isAdmin", "true");
      showAlert("Accesso riuscito!", "success");
      navigate("/menu");
    } else {
      showAlert("Credenziali non valide", "error");
    }
  };

  return (
    <div className="admin-container">
      <h2>Accesso Admin</h2>
      <form onSubmit={handleLogin} className="admin-form">
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button type="submit">Accedi</button>
      </form>
    </div>
  );
}

export default AdminPage;
