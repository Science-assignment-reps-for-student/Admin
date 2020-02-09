import React from 'react';
import * as S from '../style/MainStyle';
import { MainClass } from '../component';
import edit from '../imgs/edit.png';

const MainContent = ({checked,title,classData}) => {
    const dummyData = [
        {
            num: 1,
        },
        {
            num: 2,
        },
        {
            num: 3,
        },
        {
            num: 4,
        }
    ];
    const checkedValue = Object.values(checked);
    const filteredData = dummyData.filter((e)=> checkedValue[e.num-1]); 
    return (
        <S.MainContent>
            <div className="wrapper">
                <h2>{title}</h2>
                <S.MainFixButton><img src={edit} alt=""/>수정</S.MainFixButton>
            </div>
           
            <hr/>
            <div>
                {
                    filteredData.map((e)=> <MainClass key={e.num} num={e.num} title={title}></MainClass>)
                }
            </div>
        </S.MainContent>
    )
}

export default MainContent;