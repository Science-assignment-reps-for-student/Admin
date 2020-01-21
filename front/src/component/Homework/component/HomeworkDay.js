import React from 'react'
import * as S from '../../../style/HomeworkStyle'

const HomeworkDay = ({children, dateChange}) => {

    const inputChange = (e) => {
        const value = e.target.value;
        dateChange(value);
    }
    return (
        <S.HomeworkDay>
            {children}
            <S.HomeworkDayInput onChange={inputChange} type="date" required/>
        </S.HomeworkDay>
    )
}

export default HomeworkDay;