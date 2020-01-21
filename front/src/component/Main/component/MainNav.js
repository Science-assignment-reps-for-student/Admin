import React from 'react'
import * as S from '../../../style/MainStyle'

const MainNav = () => {
    return ( 
        <S.MainNav>
            <div id="bar"/>
            <h2>필터</h2>
            <div id="bar"/>
            <S.MainClassCheckbox>
                <input type="checkbox"/>
                <span>전체</span>
            </S.MainClassCheckbox>
            <div id="bar"/>
            <S.MainClassCheckbox>
                <input type="checkbox"/>
                <span>1반</span>
            </S.MainClassCheckbox>
            <S.MainClassCheckbox>
                <input type="checkbox"/>
                <span>2반</span>
            </S.MainClassCheckbox>
            <S.MainClassCheckbox>
                <input type="checkbox"/>
                <span>3반</span>
            </S.MainClassCheckbox>
            <S.MainClassCheckbox>
                <input type="checkbox"/>
                <span>4반</span>
            </S.MainClassCheckbox>
            <div id="bar"/>
        </S.MainNav>
    )
}

export default MainNav;