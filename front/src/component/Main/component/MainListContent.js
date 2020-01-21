import React from 'react'
import * as S from '../../../style/MainStyle'

const MainListContent = ({number,name,isChecked}) => {
    return (
        <S.MainListContent>
            <td>{number}</td>
            <td>{name}</td>
            <td>{isChecked ? "O" : "X"}</td>
        </S.MainListContent>
    )
}

export default MainListContent;