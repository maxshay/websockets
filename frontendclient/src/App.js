import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import "./styling/utils.css"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// material ui styles
import WsClient from "./components/WsClient";

// images
import websocketImage from './imgs/websocket.png'



const App = () => {
    
    return (
        <div className="App bg-main-dark">
            <div className="container-xl">
                <div className="d-flex justify-content-center mt-5">
                    <img src={websocketImage} className="img-fluid" alt="ws"/>
                </div>
                <div className="mt-5">
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <div className="d-flex justify-content-center">
                                    <Link to="/chat">
                                        <button type="button" className="btn btn-warning text-white user-select-none">
                                            Connect!
                                        </button>
                                    </Link>
                                </div>   
                            </Route>
                            <Route path="/chat">
                                <WsClient />
                            </Route>
                        </Switch>
                        
                    </Router>
                </div>
            </div>
        </div>
    );
};

export default App;