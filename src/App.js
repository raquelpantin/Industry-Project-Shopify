import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Form from "./pages/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/marketing" component={Form} />
    </BrowserRouter>
  );
}

export default App;
