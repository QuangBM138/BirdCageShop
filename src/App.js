import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import CopyWriter from "./components/footer/CopyWriter";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage />
      <Footer></Footer>
      {/* <CopyWriter></CopyWriter> */}
    </div>
  );
}

export default App;
