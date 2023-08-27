import { createContext,useState } from "react";
const AppContext = createContext();
const  AppProvider =  ({ children }) => {
//   const [value, updateValue] = useState(0);
//   const [bgColor,setBgColor] = useState('green')
  const [elment,setElment] = useState({
    value:0,
    bgColor:'green',
  })
  return <AppContext.Provider value={[elment,setElment]}>{children}</AppContext.Provider>;
};
export {AppContext,AppProvider};
