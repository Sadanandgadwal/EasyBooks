import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Home";
import ErrorPage from "./components/Errorpage";
import Footer from "./components/Footer";
import HeroSection from "./components/Video";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HeroSection />
          <Home />
          <Footer />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
