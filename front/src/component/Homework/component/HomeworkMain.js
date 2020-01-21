import React from 'react'
import * as S from '../../../style/HomeworkStyle'
import { HomeworkTitle } from '../component'

const HomeworkMain = ({contentChange, titleChange, categoryChange, category}) => {

    const inputChange = (e) => {
        contentChange(e.target.value)
    }

    return (
        <S.HomeworkMain>
            <h2>과제정보</h2>
            <HomeworkTitle category={category} categoryChange={categoryChange} titleChange={titleChange}/>
            <S.HomeworkExplain onChange={inputChange} placeholder="과제 설명"/>
        </S.HomeworkMain>
    )
}

export default HomeworkMain;