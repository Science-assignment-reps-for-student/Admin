import React, { useState, useEffect } from 'react';
import { Header, BackgroundWhite } from '../public';
import * as S from './style/MainStyle';
import { MainContent, MainNav } from './component';
import { refreshAccessTokenURL } from '../resource/serverURL';
import { refreshAccessToken } from '../resource/publicFunction';
import axios from 'axios';

const AdminMain = ({ state, actions }) => {

    const { accessToken, refreshToken } = state;

    const [checked,checkedChange] = useState({
        1: true,
        2: true,
        3: true,
        4: true,
    });

    useEffect(()=> {
        refreshAccessToken(refreshToken,actions,refreshAccessTokenURL);
    },[])


    return (
        <>
            <Header/>
            <BackgroundWhite>
                <S.MainDiv>
                    <div>
                        <h1>제출 현황</h1>
                        <hr/>
                        <MainContent checked={checked} title="[개인] 정우영은 공장장인가?"/>
                        <MainContent checked={checked} title="[개인] 정우영은 공장장인가?"/>
                    </div>
                    <div>
                        <MainNav checkedChange={checkedChange} checked={checked}/>
                    </div>
                </S.MainDiv>
            </BackgroundWhite>
        </>
    )
}

export default AdminMain;