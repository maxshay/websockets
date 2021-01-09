import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css";
import "./styling/utils.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// components
import WsClient from "./components/WsClient";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

// images
import Banner from "./components/Banner";

const App = () => {



  return (
    <div className="App bg-main-dark">
      <div className="container-xl">
        <Banner />
        <div className="mt-5">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/chat/:room" component={WsClient} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
