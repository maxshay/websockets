import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import "./styling/utils.css";
import "./App.css";
import { useState } from 'react'

// material ui styles
import WsClient from "./components/WsClient";

// images
import websocketImage from './imgs/websocket.png'



const App = () => {
    const [connected, setConnected] = useState(false)

    const connectWs = () => {
        setConnected(true)
    }

    return (
        <div className="App bg-main-dark">
            <div className="container-xl">
                <div className="d-flex justify-content-center mt-5">
                    <img src={websocketImage} className="img-fluid" alt="ws"/>
                </div>
                <div className="mt-5">
                {
                    
                    connected ? (
                        <WsClient />
                        ) : (
                        <div className="d-flex justify-content-center">
                            <button 
                                type="button" className="btn btn-warning text-white user-select-none"
                                onClick={()=> connectWs()}
                            >
                                Connect!
                            </button>
                        </div>
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default App;