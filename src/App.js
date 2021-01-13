import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from "./components/navbar/navbar.component.jsx";
import Home from "./pages/home.component.jsx";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
				<Route exact path="/" component={Home} />
			</Switch>
      
    </div>
  );
}


export default App;
