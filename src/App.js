import { Routes , Route } from 'react-router';
import './App.css';
import Navbar from "./Componants/navbar/Navbar";
import Home from "./pages./Home"
import Footer from "./Componants/footer/Footer"
import Signup from "./pages./Authentication/SignUp";
import Login from "./pages./Authentication/Login"
import Rules from "./pages./Rules/Rules";
import RequireAuth from './pages./PrivateAuth/RequireAuth';



function App() {
  return (
    <div className="App">
        <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="rules" element={
      <RequireAuth>
        <Rules/>
      </RequireAuth>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
