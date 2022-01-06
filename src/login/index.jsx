import React, { Component } from 'react';
// import { fetchpost } from '../utils/zgfetch';
import './login.scss';
import { getLogin } from '../api';
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',//用户名
            password: '',//密码
            userNameValid: true,
            passWordValid: true,
        }
    }

    textChange(key, event) {
        console.log(key);
        this.setState({ [key]: event.target.value });
        if ("" === event.target.value) {
            this.setState({ [key + 'Valid']: false })
        } else {
            this.setState({ [key + 'Valid']: true })
        }
    }


    //登录
    async doLogin(props) {
        console.log(this.state);
        let loginres = await getLogin(this.state.userId, this.state.password);
        console.log("role:" + loginres.data.data.role);
        console.log("token:" + loginres.data.data.token);
        // this.props.history.push('/patient')
        
        switch (loginres.data.data.role) {
            case 1:
                console.log("病人登录成功");
                alert("登录成功，欢迎患者");
                this.props.navigator.navigate("/patient", { replace: true });
                break;
            case 2:
                console.log("医生登录成功");
                alert("登录成功，欢迎医生");

                break;
            case 3:
                console.log("配药师登录成功");
                alert("登录成功，欢迎配药师");

                break;
            case 4:
                console.log("药剂师登录成功")
                alert("登录成功，欢迎药剂师!");
                break;
            case 5:
                console.log("收费者登录成功")
                alert("登陆成功，欢迎收费者!");
                break;
        }
    }

    handleSubmit(event) {
        console.log(this.state.userName);
        event.preventDefault();
    }

    render() {

        return (
            <section className="login-bg-wrap">
                <div className="login-content">
                    {/* <span className="logo"><img src="http://www.sj-hospital.org/static/images/logo.png" alt="" /></span> */}
                    <h1>👌医院门诊系统</h1>
                    <form onSubmit={this.handleSubmit.bind(this)} history={this.props.history}>
                        <label>
                            <span>用户名</span>
                            <input type="text" value={this.state.userName} onChange={this.textChange.bind(this, 'userId')} />
                            <i className={this.state.userNameValid === false ? "error" : 'required'}>用户名不能为空</i>
                        </label>
                        <label>
                            <span className="span-mima">密码</span>
                            <input type="password" value={this.state.passWord} onChange={this.textChange.bind(this, 'password')} />
                            <i className={this.state.passWordValid === false ? "error" : 'required'}>密码不能为空</i>
                        </label>
                        <button navigate={this.props.navigator} type="submit" className={(("" === this.state.userId) || ("" === this.state.password)) ? "disabled" : "login-btn"} onClick={this.doLogin.bind(this)} >登录</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default Login;