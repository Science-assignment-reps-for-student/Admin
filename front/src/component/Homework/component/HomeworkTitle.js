import React, { useState } from 'react'
import * as S from '../../../style/HomeworkStyle'

const HomeworkTitle = ({titleChange,categoryChange,category}) => {

    const [isHover,hoverChange] = useState();

    const mouseOver = () => {
        hoverChange(true);
    }

    const mouseLeave = () => {
        hoverChange(false);
    }

    const inputChange = (e) => {
        titleChange(e.target.value)
    }

    const categoryClick = (e) => {
        categoryChange(e.target.innerText);
    }

    return (
        <>
            <S.HomeworkTitle>
                <S.HomeworkDropdown onMouseEnter={mouseOver} onMouseLeave={mouseLeave}><p>{category}</p><i/></S.HomeworkDropdown>
                <S.HomeworkTitleInput onChange={inputChange} placeholder="제목"/>
            </S.HomeworkTitle>

            <S.HomeworkDropdownContentWrapper onMouseEnter={mouseOver} onMouseLeave={mouseLeave} hover={isHover}>
                <S.HomeworkDropdownContent onClick={categoryClick}>hello world</S.HomeworkDropdownContent>
            </S.HomeworkDropdownContentWrapper>
        </>
    )
}

export default HomeworkTitle;