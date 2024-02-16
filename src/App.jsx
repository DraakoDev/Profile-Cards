import { Profile } from "./components/Profile";
import "./css/App.css";

function App() {
  return (
    <div className="app-container">
      <Profile
        source="/Dalto.jpg"
        name="Lucas Dalto"
        country="Argentina"
        charge="System enginner"
        channel="https://www.youtube.com/@soydalto"
      ></Profile>
      <Profile
        source="/Midu.jpg"
        name="Miguel Angel Duran"
        country="Spain"
        charge="System enginner"
        channel="https://www.youtube.com/@midulive"
      ></Profile>
      <Profile
        source="/holamundo.png"
        name="Hola Mundo"
        country="Chile"
        charge="System enginner"
        channel="https://www.youtube.com/@HolaMundoDev"
      ></Profile>
    </div>
  );
}

export default App;
