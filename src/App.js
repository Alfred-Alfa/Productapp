import logo from './logo.svg';
import './App.css';
import AddProduct from './Components/AddProduct';
import SearchPro from './Components/SearchPro';
import Delpro from './Components/Delpro';
import Viewall from './Components/Viewall';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddProduct/>} />
      <Route path="/Del" element={<Delpro/>} />
      <Route path="/Ser" element={<SearchPro/>} />
      <Route path="/View" element={<Viewall/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
