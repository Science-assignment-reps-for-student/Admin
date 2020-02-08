import React from 'react'
import * as S from '../../../style/MainStyle'


const MainNav = ({ checked, checkedChange }) => {
    
    const isAllChecked = () => {
        const checkedValue = Object.values(checked);
        return checkedValue.find((e) => e !== false);
    }

    const allCheck = (e) => {
        const keys = Object.keys(checked);
        let buffer = Object.assign({},checked);
        keys.map((num)=>{
            buffer[num] = e.target.checked;
        });
        checkedChange(buffer);
    }

    const handleClick = (classNumber) => {
        let buffer = Object.assign({},checked);
        buffer[classNumber] = !buffer[classNumber];
        checkedChange(buffer);
    }

    return ( 
        <S.MainNav>
            <div id="bar"/>
            <h2>필터</h2>
            <div id="bar"/>
            <S.MainClassCheckbox>
                <input type="checkbox" checked={isAllChecked()} onChange={allCheck}/>
                <span>전체</span>
            </S.MainClassCheckbox>
            <div id="bar"/>
            <S.MainClassCheckbox>
                <input type="checkbox" checked={checked[1]} onChange={() => handleClick(1)}/>
                <span>1반</span>
            </S.MainClassCheckbox>
            <S.MainClassCheckbox>
                <input type="checkbox" checked={checked[2]} onChange={() => handleClick(2)}/>
                <span>2반</span>
            </S.MainClassCheckbox>
            <S.MainClassCheckbox>
                <input type="checkbox" checked={checked[3]} onChange={() => handleClick(3)}/>
                <span>3반</span>
            </S.MainClassCheckbox>
            <S.MainClassCheckbox>
                <input type="checkbox" checked={checked[4]} onChange={() => handleClick(4)}/>
                <span>4반</span>
            </S.MainClassCheckbox>
            <div id="bar"/>
        </S.MainNav>
    )
}

export default MainNav;