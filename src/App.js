import { useEffect } from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {
    const preventScreenshot = () => {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    };

    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        alert('Screenshots are not allowed on this page.');
      }
    };

    const handleKeyUp = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    preventScreenshot();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <div onContextMenu={handleContextMenu}>
      <Navbar />
      <HeaderContainer />
    </div>
  );
}

export default App;




