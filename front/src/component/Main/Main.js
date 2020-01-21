import React from 'react'
import { Header, BackgroundWhite } from '../public'
import * as S from '../../style/MainStyle'
import { MainContent, MainNav } from './component'

const Main = () => {
    return (
        <>
        <Header/>
        <BackgroundWhite>
            <S.MainDiv>
                <div>
                    <h1>제출 현황</h1>
                    <hr/>
                    <MainContent title="[개인] 정우영은 공장장인가?"/>
                    <MainContent title="[개인] 정우영은 공장장인가?"/>
                </div>
                <div>
                    <MainNav/>
                </div>
            </S.MainDiv>
        </BackgroundWhite>
        </>
    )
}

export default Main;