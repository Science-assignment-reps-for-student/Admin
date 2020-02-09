import React from 'react';
import * as S from '../style/MainStyle';
import { MainListContent } from '../component';

const MainList = ({studentList}) => {
    return ( 
        <S.MainList>
            <table>
                <tbody>
                    <S.MainListContent>
                        <th>학번</th>
                        <th>이름</th>
                        <th>제출여부</th>
                    </S.MainListContent>
                    {
                        studentList.map(({name,number,isChecked}) => <MainListContent name={name} number={number} isChecked={isChecked}/>)
                    }
                </tbody>
            </table>
        </S.MainList>
    )
}

export default MainList;