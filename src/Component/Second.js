import { useContext } from "react";
import { AppContext } from "./Context";

const Second = () => {
  var value = useContext(AppContext);
  return <div>two test {value}</div>;
};

export default Second;
