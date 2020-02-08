import React from 'react'
import * as S from '../../../style/PublicStyle'
import HeaderButton from './HeaderButton'

const Header = () => {

    return (
        <S.Header>
            <div>
                <p id="title"><span>SCARFS </span>Admin console</p>
                <div>
                    <HeaderButton page="main">제출현황</HeaderButton>
                    <HeaderButton page="make">과제생성</HeaderButton>
                    <HeaderButton page="revise">과제수정</HeaderButton>
                    <HeaderButton page="qna">QnA</HeaderButton>
                </div>
            </div>
            <div>
                <div id="logOut">
                    <HeaderButton page="logout">로그아웃</HeaderButton>
                </div>
            </div>
        </S.Header>
    )
}

export default Header;