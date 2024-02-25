import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Specifically from "./components/specifically/Specifically";
import Contents from "./components/contents/Contents";
import Price from "./components/price/Price";
import Clients from "./components/clients/Clients";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Specifically />
      <Contents />
      <Price />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
