import './App.css';
import Details from './Details';
import Handlingapi from './Handlingapi';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" index element={<Handlingapi/>}/>
      <Route path="details/:id" element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
