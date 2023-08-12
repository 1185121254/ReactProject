import { Component} from "react";
import {AppContext} from './Context';

class Three extends Component {
    static contextType =AppContext;
    render() {
        const value = this.context;
        return <div>three test {value}</div>;
      }
}

export default Three;
