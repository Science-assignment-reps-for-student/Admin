import React from 'react'
import * as S from '../../../style/HomeworkStyle'
import { save, trash } from '../../../img'
import { HomeworkDay } from '../component'

const HomeworkButtonBar = ({dateChange}) => {
    return (
        <S.HomeworkButtonDiv>
            <S.HomeworkButton>
                <img src={save} alt="save"/>
                <p>저장</p>
            </S.HomeworkButton>
            <S.HomeworkButton>
                <img src={trash} alt="save"/>
                <p>삭제</p>
            </S.HomeworkButton>
            <HomeworkDay dateChange={dateChange}>종료 :</HomeworkDay>
        </S.HomeworkButtonDiv>
    )
}

export default HomeworkButtonBar;