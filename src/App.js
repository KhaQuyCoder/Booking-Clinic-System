
import Loading from "./components/LoadingComponent/Loading";
import "./App.css";
import Home from "./pages/User/Home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loading />
        <Home />
      </header>
    </div>
  );
}

export default App;
