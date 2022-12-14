import "./App.css"
// import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <header>
        <title>
          BCC United Team - Zamonaviy uylar
        </title>
        <meta name="name" content="BCC United Team | Zamonaviy uylar" />
        <meta name="description" content="BCC United Team - Zamonaviy uylar." />
        <meta property="og:title" content="BCC United Team | Zamonaviy uylar" />
      </header>
      <HomePage/>
    </div>
  );
}

export default App;
