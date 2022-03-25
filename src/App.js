import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Form from "./pages/Form/Form";

function App() {
  return (
    <BrowserRouter>
      {/* <Form /> */}
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/marketing" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
