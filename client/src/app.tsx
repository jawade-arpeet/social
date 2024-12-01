import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import MainLayout from "./layouts/main-layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
