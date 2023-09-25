import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from "./pages/router";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      {/* <header className="App-header">
        
      </header> */}
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
