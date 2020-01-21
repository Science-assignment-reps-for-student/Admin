import React, { useState } from 'react'
import * as S from '../../style/LoginStyle'
import { background } from '../../img'

const Login = () => {
    const [id,idChange] = useState();
    const [password,passwordChange] = useState();

    return (
        <>
            <S.LoginBackground src={background}>
                <S.LoginHeader>
                    <div>
                        <p><span>SCARF </span>Admin console</p>
                        <p id="bookmark">
                            로그인
                            <div/>
                        </p>
                        
                    </div>
                </S.LoginHeader>
                <S.LoginDiv>
                    <div>
                        <p id="title">LOGIN</p>
                        <div>
                            <p id="subTitle">Admin id</p>
                            <input type="text" placeholder="ID"/>
                        </div>
                        <div>
                            <p id="subTitle">Password</p>
                            <input type="password" placeholder="PASSWORD"/>
                        </div>
                        <button>로그인</button>
                    </div>
                    <p><span>SCARFS</span>Admin console</p>
                </S.LoginDiv>
            </S.LoginBackground>
        </>
    )
}

export default Login;