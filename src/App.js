import './App.css';
import { Routes, Route } from "react-router-dom"
import People from './components/People';
import Form from './components/Form';
import Planets from './components/Planets';
import Starships from './components/Starships';


function App() {
  return (
    <fieldset className="App">
      <h1 style={{ backgroundColor: "cornflowerblue" }}>💫💫💫 StarWars API aka SWAPI 💫💫💫</h1>
      <Form />

      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/starships/:id" element={<Starships />} />

      </Routes>
    </fieldset>
  );
}

export default App;
