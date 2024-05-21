// import Header from "./Header";
import Navbar from "./Navbar";
import "./App.css";
import Forms from "./Forms"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center mt-[-5vh] ">
      <Forms  />
      </div>
    </div>
  );
}

export default App;
