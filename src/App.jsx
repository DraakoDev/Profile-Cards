import { Profile } from "./components/Profile";
import { devs } from "./constans/data";
import "./css/App.css";

function App() {
  return (
    <div className="app-container">
      {devs.map((info, i) => {
        return <Profile info={info} key={i} />;
      })}
    </div>
  );
}

export default App;
