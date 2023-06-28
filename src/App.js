import "./App.css";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HeaderContainer />
      <Navbar />
    </div>
  );
}

export default App;
