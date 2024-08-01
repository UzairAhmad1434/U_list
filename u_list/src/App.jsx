import "./App.css";
import Header from "./components/header";
import Router from "./routes/Router.jsx";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <Router />
      </div>
    </div>
  );
}

export default App;
