import React, { Component } from "react";
import { connect } from "react-redux";

class LearningSaga extends Component {
    state={
        name:'admin',
        password:'admin',
    }
  add = () => {
    this.props.dispatch({ type: "increment_saga" });
  };
  
  jian = () =>{
    this.props.dispatch({type:'decrement_saga'});
  }

  addAsync = () => {
    this.props.dispatch({ type: "incrementAsync_saga" });
  };
  nameChange=(e)=>{
    this.setState({
        name:e.target.value
    })
  }
  passwordChange=(e)=>{
    this.setState({
        password:e.target.value
    })
  }
  login=()=>{
    this.props.dispatch({
        type:'login',
        account:{
            name:this.state.name,
            password:this.state.password,
        },
    })
  }
  loginOut=()=>{
    this.props.dispatch({
        type:'loginOut'
    })
  }
  render() {
    return (
      <>
        <div>
          <span style={{ fontFamily: "bold", fontSize: 22 }}>
            {this.props.counter}
          </span>
        </div>
        <button onClick={this.add}>add1-sync</button>
        <button onClick={this.jian}>jian1-sync</button>
        <button onClick={this.addAsync}>add1-async</button>
        <div style={{justifyContent:'center',alignItems:'center',margin:20}}>
            <div>用户名：<input onChange={this.nameChange} value={this.state.name}></input></div>
            <div>密码：<input onChange={this.passwordChange} value={this.state.password}></input></div>
            <button onClick={this.login}>登录</button>
            <button disabled={!this.props.loginInfo.success} onClick={this.loginOut}>登出</button>
            {this.props.loginInfo.success ? <div>{this.props.loginInfo.name} 用户登录成功</div>:null}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter,
  loginInfo:state.loginInfo,
});
export default connect(mapStateToProps)(LearningSaga);
