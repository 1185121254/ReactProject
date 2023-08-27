/* eslint-disable eqeqeq */
import { useContext, useRef } from "react";
import { AppContext } from "./Context";
import { useTranslation } from "react-i18next";

const Second = () => {
  const [elment, setElment] = useContext(AppContext);
  //   const [value, setValue] = useContext(AppContext);

  const inputRef = useRef();
  const { t, i18n } = useTranslation();
  const onclick = () => {
    inputRef.current.focus();
  };
  const onclickI18n = () => {
    if (i18n.language === "zh") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("zh");
    }
  };
  const onChangeBgColor = () => {
    if (elment.bgColor == "green") {
      //   setBgColor("red");
      setElment({ bgColor: "red" });
    } else {
      setElment({ bgColor: "green" });
    }
  };
  return (
    <div style={{ margin: 10, backgroundColor: elment.bgColor }}>
      <p style={{ fontFamily: "bold", fontSize: 22 }}>
        two test {elment.value}
      </p>
      <input type="text" ref={inputRef} />
      <button onClick={onclick}>按钮</button>
      <button onClick={onclickI18n}>切换语言</button>
      <p style={{ fontFamily: "bold", fontSize: 22 }}>{t("title")}</p>
      <p style={{ fontFamily: "bold", fontSize: 22 }}>{t("sex")}</p>
      <button style={{ margin: 5 }} onClick={onChangeBgColor}>
        Change BackGroundColor Button
      </button>
      <button style={{margin:5}} onClick={()=>{setElment({value:elment.value+1})}}>INCREMENT</button>
      {/* <button style={{margin:5}} onClick={()=>{updateValue(value-1)}}>DECREMENT</button> */}
      {/* <button style={{margin:5}} onClick={()=>{ setTimeout(() => {
         updateValue(value+1)
      }, 2000);}}>ASYNC INCREMENT</button> */}
      {/* <button style={{margin:5}} onClick={()=>{ if( value % 2 == 0){ updateValue(value+1)}}}>偶数加</button> */}
    </div>
  );
};

export default Second;
