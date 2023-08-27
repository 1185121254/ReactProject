import "./App.css";
import { Component, useState } from "react";
import Frist from "./Component/Frist";
import Second from "./Component/Second";
import Three from "./Component/Three";
import { AppProvider } from "./Component/Context";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <div>
          <Middle />
        </div>
      </AppProvider>
    );
  }
}
function Middle() {
  return (
    <div>
      {/* <Frist /> */}
      <Second />
      {/* <Three /> */}
    </div>
  );
}
export default App;
