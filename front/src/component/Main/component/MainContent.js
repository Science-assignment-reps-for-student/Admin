import React from 'react'
import * as S from '../../../style/MainStyle'
import { MainClass } from '../component'

const MainContent = ({title,classData}) => {
    return (
        <S.MainContent>
            <h2>{title}</h2>
            <hr/>
            <div>
                <MainClass num="1" title={title}/>
                <MainClass num="2" title={title}/>
                <MainClass num="3" title={title}/>
                <MainClass num="4" title={title}/>
            </div>
        </S.MainContent>
    )
}

export default MainContent;