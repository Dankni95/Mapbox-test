import "./styles.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { MapProvider } from "./context/mapContext";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <MapProvider>
      <div className="App">
        <Map />
        <Footer />
      </div>
    </MapProvider>
  );
}

export default App;
