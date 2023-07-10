import "./App.css";
import { Komponenta1, Komponenta2 } from "./index";

function App() {
  function duljinaTeksta(str) {
    return str.length;
  }

  const string = "dflsdkdfstfdlsdf";

  return (
    <div className="App">
      {duljinaTeksta(string) % 2 === 0 && <Komponenta1 />}
      {duljinaTeksta(string) % 2 === 1 && <Komponenta2 />}
    </div>
  );
}

export default App;
