import React, { useState, useCallback, useEffect } from 'react'
import { Header, BackgroundBlack } from '../public'
import * as S from '../../style/HomeworkStyle'
import { HomeworkNav, HomeworkButtonBar, HomeworkMain } from './component'

const Homework = () => {
    const [date, _dateChange] = useState("");
    const [content, _contentChange] = useState("");
    const [file, _fileChange] = useState([]);
    const [title, _titleChange] = useState("");
    const [category, _categoryChange] = useState("카테고리");
    const [classFilter, _classChange] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    })

    const fileChange = useCallback((e) => {
        _fileChange(e)
    },[]);

    const contentChange = useCallback((e) => {
        _contentChange(e)
    },[]);

    const dateChange = useCallback((e) => {
        _dateChange(e)
    },[]);

    const titleChange = useCallback((e) => {
        _titleChange(e)
    },[])

    const categoryChange = useCallback((e)=>{
        _categoryChange(e);
    },[])

    const classChange = useCallback((e) => {
        _classChange(e)
    },[])

    useEffect(()=>{
        console.log(classFilter);
    },[classFilter])

    return (
        <BackgroundBlack>
            <Header/>
            <S.HomeworkDiv>
                <h1>과제 수정</h1>
                <HomeworkButtonBar dateChange={dateChange}/>
                <div>
                    <HomeworkMain category={category} categoryChange={categoryChange} titleChange={titleChange} contentChange={contentChange}/>
                    <HomeworkNav file={file} fileChange={fileChange} classFilter={classFilter} classChange={classChange}/>
                </div>
            </S.HomeworkDiv>
        </BackgroundBlack>
    )
}

export default Homework;