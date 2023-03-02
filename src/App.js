import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Diego" />
      </div>
    </div>
  );
}
