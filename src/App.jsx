import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import ToastAdmin from "./components/pages/order/Navbar/ToastAdmin";

function App() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        ></Route>
        <Route
          path="order/:userName"
          element={<OrderPage />}
        ></Route>
        <Route
          path="*"
          element={<ErrorPage />}
        ></Route>
      </Routes>
      <ToastAdmin />
    </>
  );
}

export default App;

// D’abord on définit les states de base (état, données, variable…)

// Comportements, les actions, la logique

// L’affichage, le render, via return
