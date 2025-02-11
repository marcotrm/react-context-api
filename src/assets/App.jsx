import { AlertProvider } from "./components/contexts/AlertContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Layout
import DefaultLayout from "./components/DefaultLayout";

// Pages
import HomePage from "./pages/Home";
import Menu from "./pages/Menu";
import PizzaDetail from "./components/PizzaDetail";
import Contact from "./pages/Contact";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<PizzaDetail />} />
            <Route path="/contatti" element={<Contact />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}
export default App;
