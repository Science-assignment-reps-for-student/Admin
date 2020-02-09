import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import * as S from '../style/PublicStyle'

const HeaderButton = ({children,page,history}) => {

    const [isHover,hoverChange] = useState(false);

    const pages = {
        main: () => { history.push('/') },
        make: () => { history.push('/Make') },
        qna: () => { history.push('/QnA') },
        revise: () => { history.push('/revise') },
        logout: () => { history.push('/Login') }
    }
    
    const mouseEnter = () => {
        hoverChange(true);
    }

    const mouseLeave = () => {
        hoverChange(false);
    }

    const movePage = () => {
        pages[page]();
    }

    return (
        <S.HeaderButton onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={movePage}>
            <p>{children}</p>
            <S.HeaderButtonUnderLine hover={isHover}/>
        </S.HeaderButton>
    )
}

export default withRouter(HeaderButton);
