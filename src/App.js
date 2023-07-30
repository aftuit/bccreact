import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <header>
        <title>BCC United Team - Zamonaviy uylar</title>
        <meta name="name" content="BCC United Team | Zamonaviy uylar" />
        <meta name="description" content="BCC United Team - Zamonaviy uylar." />
        <meta property="og:title" content="BCC United Team | Zamonaviy uylar" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="*" element={<h1>not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
