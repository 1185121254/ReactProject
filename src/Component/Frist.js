import { Component} from "react";
import {AppContext} from './Context'

class Frist extends Component {
    // static contextType = AppContext;
    render() {
      const value = this.context
      return <div>one test {value}</div>;
    }
}
Frist.contextType = AppContext;
export default Frist;
