import { Routes , Route } from 'react-router';
import './App.css';
import Navbar from "./Componants/navbar/Navbar";
import Home from "./pages./Home"
import Footer from "./Componants/footer/Footer"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/footer" element={<Footer/>}/>
    </Routes>
    </div>
  );
}

export default App;
