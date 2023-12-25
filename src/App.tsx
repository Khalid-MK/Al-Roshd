import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAppSelector } from "./store/hooks";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const direction = useAppSelector((state) => state.direction.value);

  return (
    <div dir={direction}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/Al-Roshd" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
