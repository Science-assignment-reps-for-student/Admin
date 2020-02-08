import React from 'react'
import * as S from '../../../style/HomeworkStyle'
import { HomeworkTitle } from '../component'

const HomeworkMain = ({ MainInfo, MainInfoChange }) => {
    const { category, title, content } = MainInfo;
    const { categoryChange, titleChange, contentChange } = MainInfoChange;

    const inputChange = (e) => {
        contentChange(e.target.value)
    }

    const TitleInfo = {
        title,
        category,
    }

    const TitleInfoChange = {
        categoryChange,
        titleChange,
    }

    return (
        <S.HomeworkMain>
            <h2>과제정보</h2>
            <HomeworkTitle TitleInfo={TitleInfo} TitleInfoChange={TitleInfoChange}/>
            <S.HomeworkExplain onChange={inputChange} placeholder="과제 설명" value={content}/>
        </S.HomeworkMain>
    )
}

export default HomeworkMain;