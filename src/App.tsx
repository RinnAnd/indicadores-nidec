import Dataline from "./components/Dataline";
import Graphic from "./components/Graphic";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen w-full font-sans">
      <Header />
      <Dataline />
      <Graphic />
    </div>
  );
}

export default App;
