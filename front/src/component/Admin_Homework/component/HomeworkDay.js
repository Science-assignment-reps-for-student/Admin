import React from 'react';
import * as S from '../style/HomeworkStyle';

const HomeworkDay = ({ dateChange, num, date }) => {

    const inputChange = (e) => {
        const buffer = Object.assign({},date);
        const value = e.target.value;
        buffer[num] = value;
        dateChange(buffer);
    }



    return (
        <S.HomeworkDay>
            종료 : 
            <S.HomeworkDayInput onChange={inputChange} value={date[num]} type="date"/>
        </S.HomeworkDay>
    )
}

export default HomeworkDay;