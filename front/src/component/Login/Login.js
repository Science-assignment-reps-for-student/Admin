import React, { useState, useCallback } from 'react';
import * as S from '../../style/LoginStyle';
import { background } from '../../img';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

const LoginServerUrl = "http://1.237.96.178:3000/admin/auth";

const Login = ({ actions, history }) => {
    const [id,idChange] = useState();
    const [pw,passwordChange] = useState();

    const idChangeHandler = useCallback((e) => {
        idChange(e.target.value);
    },[]);

    const passwordChangeHandler = useCallback((e) => {
        passwordChange(e.target.value);
    },[]);

    const serverRequest = useCallback((url,id,pw) => {
        const data = {
            id,
            pw,
        };
        axios.post(url, data).then((e)=> {
            history.push('/')
        });
    },[])

    const LoginButtonHandler = useCallback((LoginServerUrl,id,pw) => {
        serverRequest(LoginServerUrl,id,pw);
    },[serverRequest]);


    return (
        <>
            <S.LoginBackground src={background}>
                <S.LoginHeader>
                    <div>
                        <p>
                            <span>SCARF </span>
                            Admin console
                        </p>
                        <p id="bookmark">
                            로그인
                        </p>
                        
                    </div>
                </S.LoginHeader>
                <S.LoginDiv>
                    <div>
                        <p id="title">LOGIN</p>
                        <div>
                            <p id="subTitle">Admin id</p>
                            <input type="text" placeholder="ID" onChange={idChangeHandler}/>
                        </div>
                        <div>
                            <p id="subTitle">Password</p>
                            <input type="password" placeholder="PASSWORD" onChange={passwordChangeHandler}/>
                        </div>
                        <button onClick={()=> {LoginButtonHandler(LoginServerUrl,id,pw)}}>로그인</button>
                    </div>
                    <p><span>SCARFS</span>Admin console</p>
                </S.LoginDiv>
            </S.LoginBackground>
        </>
    )
}

export default withRouter(Login);