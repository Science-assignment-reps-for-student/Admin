import React, { useState, useCallback } from 'react';
import * as S from './style/LoginStyle';
import background from './imgs/background.png';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { setLocalStorage, setContext } from '../resource/publicFunction';

const LoginServerUrl = "http://15.164.184.104:8888/auth";

const AdminLogin = ({ actions, history }) => {
    const [id,idChange] = useState();
    const [pw,passwordChange] = useState();

    const idChangeHandler = useCallback((e) => {
        idChange(e.target.value);
    },[]);

    const passwordChangeHandler = useCallback((e) => {
        passwordChange(e.target.value);
    },[]);

    const loginRequest = useCallback((url,userEmail,userPw,actions) => {
        const data = {
            userEmail,
            userPw,
        };
        axios.post(url, data)
        .then((e)=> {
            const accessToken = e.data.accessToken;
            const refreshToken = e.data.refreshToken;
            setLocalStorage(accessToken,refreshToken);
            setContext(accessToken,refreshToken,actions);
            history.push('/Admin');
        });
    },[history]);


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
                        <button onClick={()=> {loginRequest(LoginServerUrl,id,pw,actions)}}>로그인</button>
                    </div>
                    <p><span>SCARFS</span>Admin console</p>
                </S.LoginDiv>
            </S.LoginBackground>
        </>
    )
}

export default withRouter(AdminLogin);