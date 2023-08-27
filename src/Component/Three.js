import { Component } from "react";
import { AppContext } from "./Context";
import { withTranslation } from "react-i18next";

class Three extends Component {
  static contextType = AppContext;

  render() {
    const value = this.context;
    const {t} = this.props;
    return (
      <div>
        <p>three test {value}</p>
        <p>{t('title')}</p>
        <p>{t('sex')}</p>
      </div>
    );
  }
}
export default withTranslation()(Three);
