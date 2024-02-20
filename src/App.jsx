import { Counter } from "./components/Counter";
import { Profile } from "./components/Profile";
import "./css/App.css";

function App() {
  return (
    <div className="app-container">
      <Profile
        source="/assets/Dalto.jpg"
        name="Lucas Dalto"
        country="Argentina"
        charge="System Enginner"
        channel="https://www.youtube.com/@soydalto"
        insta="https://www.instagram.com/soydalto/"
        twitter_x="https://twitter.com/soydalto"
      ></Profile>
      <Profile
        source="/assets/Midu.jpg"
        name="Miguel Angel Duran"
        country="Spain"
        charge="System Enginner"
        channel="https://www.youtube.com/@midulive"
        insta="https://www.instagram.com/midu.dev/"
        twitter_x="https://twitter.com/midudev"
      ></Profile>
      <Profile
        source="/assets/holamundo.png"
        name="Nicolás Schürmann"
        country="Chile"
        charge="System Enginner"
        channel="https://www.youtube.com/@HolaMundoDev"
        insta="https://www.instagram.com/holamundodevv/"
        twitter_x="https://twitter.com/_nasch_"
      ></Profile>
    </div>
  );
}

export default App;
