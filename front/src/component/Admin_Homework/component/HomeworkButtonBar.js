import React from 'react';
import * as S from '../style/HomeworkStyle';
import save from '../imgs/save.png';
import trash from '../imgs/trash.png';

const HomeworkButtonBar = ({ setHomework, patchHomework, deleteHomework, type }) => {
    return (
        <S.HomeworkButtonDiv>
            <S.HomeworkButton onClick={type === "Fix" ? patchHomework : setHomework}>
                <img src={save} alt="save"/>
                <p>저장</p>
            </S.HomeworkButton>
            <S.HomeworkButton onClick={type === "Fix" ? deleteHomework : deleteHomework}>
                <img src={trash} alt="save"/>
                <p>삭제</p>
            </S.HomeworkButton>
        </S.HomeworkButtonDiv>
    )
}

export default HomeworkButtonBar;