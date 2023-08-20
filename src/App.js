import "./App.css";
import { Component, createContext } from "react";
import Frist from './Component/Frist';
import Second from './Component/Second';
import Three from './Component/Three';
import {AppContext} from './Component/Context';
import './locale/index';

class App extends Component {
  render() {
    return (
      <AppContext.Provider value={"huang shun yi"}>
        <div>
          <Middle />
        </div>
      </AppContext.Provider>
    );
  }
}
class Middle extends Component {
  render() {
    return (
      <div>
        <Frist />
        <Second />
        <Three />
      </div>
    );
  }
}
export default App;
