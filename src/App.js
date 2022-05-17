import { Routes , Route } from 'react-router';
import './App.css';
import Navbar from "./Componants/navbar/Navbar";
import Home from "./pages./Home"
import Footer from "./Componants/footer/Footer"
import Rules from "./pages./Rules/Rules";
import Login from "./pages./Authentication/Login"
import {Questions} from "./pages./quiz-questions/Questions";
import Result from "./pages./Result/Result";
import RequireAuth from './pages./PrivateAuth/RequireAuth';
import Signup from "./pages./Authentication/SignUp";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/question" element={<Questions/>}/>
      <Route path="/result" element={<Result/>}/>
      <Route path="rules" element={
      <RequireAuth>
        <Rules/>
      </RequireAuth>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
