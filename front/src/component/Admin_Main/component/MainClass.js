import React from 'react';
import * as S from '../style/MainStyle';
import { MainList } from '../component';
import download from '../imgs/download.png';

const MainClass = ({num,title}) => {

    const countChecked = (studentList) => {
        let counter = 0;
        if(Array.isArray(studentList)){
            studentList.map((e)=>{
                if(e.isChecked){
                    counter++;
                }
                return e;
            })
        }
        return counter;
    }

    const studentList = [
        {
            name: "강신희",
            number: 1201,
            isChecked: false,
        },
        {
            name: "오준상",
            number: 1212,
            isChecked: true,
        },
        {
            name: "손민기",
            number: 1209,
            isChecked: true,
        },
        {
            name: "정우영",
            number: 1200,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        },
        {
            name: "이우찬",
            number: 1218,
            isChecked: true,
        }
    ]
    
    const max = studentList.length;
    const count = countChecked(studentList);

    return (
        <div>
            <h2>{num}반</h2>
            <S.MainClass>
                <h3>{title}</h3>
                <hr/>
                <div>
                    <S.MainClassCount>
                        <div>
                            <p>제출인원  <span>{count}</span>/{max}</p>
                            <S.MainClassCountBar>
                                <S.MainClassCoutColoredBar max={20} count={count}/>
                            </S.MainClassCountBar>
                        </div>

                        <S.MainButtonDiv>
                            <S.MainButton><img src={download} alt=""/>다운로드</S.MainButton>
                        </S.MainButtonDiv>
                    </S.MainClassCount>
                    <div>
                        <MainList studentList={studentList}/>
                    </div>
                </div>
            </S.MainClass>
        </div>
    )
}

export default MainClass;