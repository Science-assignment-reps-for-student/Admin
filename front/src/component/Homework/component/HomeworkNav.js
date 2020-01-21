import React from 'react'
import * as S from '../../../style/HomeworkStyle'
import { HomeworkFile } from '../component'

const HomeworkNav = ({file,fileChange,classFilter,classChange}) => {

    const checkboxClick = (number) => {
        let buffer = Object.assign({},classFilter);
        buffer[number] = !classFilter[number];
        classChange(buffer);
    }

    return (
        <S.HomeworkNav>
            <p>반 정보</p>
            <S.HomeworkLine/>
            <S.HomeworkCheckBox>
                <input type="checkbox" onChange={()=>checkboxClick(1)}/>
                1반
            </S.HomeworkCheckBox>
            <S.HomeworkCheckBox>
                <input type="checkbox" onChange={()=>checkboxClick(2)}/>
                2반
            </S.HomeworkCheckBox>
            <S.HomeworkCheckBox>
                <input type="checkbox" onChange={()=>checkboxClick(3)}/>
                3반
            </S.HomeworkCheckBox>
            <S.HomeworkCheckBox>
                <input type="checkbox" onChange={()=>checkboxClick(4)}/>
                4반
            </S.HomeworkCheckBox>
            <S.HomeworkLine/>
            <HomeworkFile file={file} fileChange={fileChange}/>
        </S.HomeworkNav>
    )
}

export default HomeworkNav;