import { useContext, useRef } from "react";
import { AppContext } from "./Context";
import { useTranslation } from 'react-i18next';

const Second = () => {
  const value = useContext(AppContext);
  const inputRef = useRef();
  const { t, i18n } = useTranslation();
  const onclick = () => {
    inputRef.current.focus();
  };
  const onclickI18n = () =>{
    if(t('title') === 'huangshunyi'){
        i18n.changeLanguage('zh');
    }else{
        i18n.changeLanguage('en');
    }
  }
  return (
    <div style={{ margin: 10, backgroundColor: "white" }}>
      <p style={{ fontFamily: "bold", fontSize: 22 }}>two test {value}</p>
      <input type="text" ref={inputRef} />
      <button onClick={onclick}>按钮</button>
      <button onClick={onclickI18n}>切换语言</button>
      <p style={{ fontFamily: "bold", fontSize: 22 }}>{t('title')}</p>
      <p style={{ fontFamily: "bold", fontSize: 22 }}>{t('sex')}</p>

    </div>
  );
};

export default Second;
