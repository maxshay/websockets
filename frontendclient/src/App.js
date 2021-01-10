import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "antd/dist/antd.css";
import "./styling/utils.css";
import "./App.css";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import WsClient from "./components/WsClient";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Test from "./components/Test";

// images
import Banner from "./components/Banner";

const App = () => {
  const location = useLocation();

  return (
    <div className="App bg-main-dark">
      <div className="container-xl">
        <Banner />
        <div className="mt-5">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route exact path="/test" component={Test} />
              <Route path="/chat/:room" component={WsClient} />
              <Route component={NotFound} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default App;
