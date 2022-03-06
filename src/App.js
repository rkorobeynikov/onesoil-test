import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Map from './components/map/Map';
import FieldFilter from "./components/field-filter/FieldFilter";

function App() {
  return (
    <div className="app">

      <div className="app__sidebar">
        <Sidebar/>
      </div>
      <div className="app__map">
        <Map/>
        <FieldFilter/>
      </div>
    </div>
  );
}

export default App;
