import { Component} from "react";
import {AppContext} from './Context'

class Frist extends Component {
    static contextType = AppContext;
    render() {
      var value = this.context
      return <div>one test {value}</div>;
    }
}

export default Frist;
