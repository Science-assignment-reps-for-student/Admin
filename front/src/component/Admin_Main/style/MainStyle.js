import styled from 'styled-components'


export const MainDiv = styled.div`
    padding: 30px;
    display:flex;
    &::-webkit-scrollbar {
        display: none;
    }   
    > div{
        height: 88vh;
        overflow-y: scroll;
        > h1 {
            margin-bottom: 15px;
        }
    }
`

export const MainContent = styled.div`
    width: 1450px;
    height: 80vh;
    > h2 {
        margin: 10px;
    }
    > div {
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-around; */
        > div{
            > h2 {
                margin: 10px;
            }
        }
    }
    > .wrapper {
        margin: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const MainClass = styled.div`
    width: 690px;
    height: 281px;
    background: white;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    margin: 10px;
    > h3 {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        > span 
            text-align: right;
        }
    }
    > div{
        height: 235px;
        display: flex;
    }
`

export const MainClassCount = styled.div`
    width: 460px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    > div{
        width: 50%;
        height: 99%;
        > p {
            font-size: 20px;
            font-weight: 600;
            margin: 20px;
            margin-bottom: 10px;
            > span {
                font-size: 30px;
                font-weight: 600;
                margin-left: 30px;
            }
        }
    }
`

export const MainClassCountBar = styled.div`
    width: 189px;
    height: 4px;
    margin: 20px;
    margin-top: 0px;
    background-color: gray;
`

export const MainClassCoutColoredBar = styled.div`
    width: ${props => 189 / props.max * props.count }px;
    height: 4px;
    background: ${props => props.count >= props.max ? "#FF6F61" : "#0073AA"};
`

export const MainListContent = styled.tr`
    background: "white";
    height: ${props => props.isHeader ? 35 : 25}px;
    &:nth-child(odd){
        background-color: #F5F5F5;
    }
`

export const MainButtonDiv = styled.div`
    height: 30%;
    display: flex;
    margin-top:${props => props.margin ? props.margin : 85}px;
    align-items: center;
`

export const MainButton = styled.button`
    width: 190px;
    height: 29px;
    font-weight: 600;
    color: black;
    background-color: white;
    border: 1px solid #858585;
    border-radius: 3px;
    margin-left: 20px;
    > img {
        width: 10px;
        height: 10px;
        margin-right: 10px;
    }
`

export const MainNav = styled.div`
    width: 350px;
    height: 800px;
    padding-top: 58px;
    box-sizing: border-box;
    > #bar {
        width: 100%;
        height: 1px;
        background: #858585;
    }
    > h2 {
        padding: 10px;
        padding-top: 11px;
    }
`

export const MainClassCheckbox = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    > span {
        font-weight: 600;
        font-size: 13px;
    }
`

export const MainFixButton = styled.button`
    width: 100px;
    height: 40px;
    font-weight: 600;
    font-size: 15px;
    color: black;
    border: none;
    margin-right: 50px;
    background-color: white;
    border: 1px solid black;
    border-radius: 3px;
    > img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }
`

export const MainLoadingContent = styled.div`
    width: 1450px;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes ldio-dlvqi1wu39l {
    0% { transform: rotate(0deg) }
    50% { transform: rotate(22.5deg) }
    100% { transform: rotate(45deg) }
    }
    .ldio-dlvqi1wu39l > div {
    transform-origin: 100px 100px;
    animation: ldio-dlvqi1wu39l 0.2s infinite linear;
    }
    .ldio-dlvqi1wu39l > div div {
        position: absolute;
        width: 22px;
        height: 152px;
        background: #23282d;
        left: 100px;
        top: 100px;
        transform: translate(-50%,-50%);
    }
    .ldio-dlvqi1wu39l > div div:nth-child(1) {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    .ldio-dlvqi1wu39l > div div:nth-child(6) {
        width: 80px;
        height: 80px;
        background: #f1f2f3;
        border-radius: 50%;
    }.ldio-dlvqi1wu39l > div div:nth-child(3) {
    transform: translate(-50%,-50%) rotate(45deg)
    }.ldio-dlvqi1wu39l > div div:nth-child(4) {
    transform: translate(-50%,-50%) rotate(90deg)
    }.ldio-dlvqi1wu39l > div div:nth-child(5) {
    transform: translate(-50%,-50%) rotate(135deg)
    }
    .loadingio-spinner-gear-navzgsfup8 {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #f1f2f3;
    }
    .ldio-dlvqi1wu39l {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
    }
    .ldio-dlvqi1wu39l div { box-sizing: content-box; }
`

export const MainList = styled.div`
    width: 230px;
    height: 99%;
    overflow-y: scroll;
    border-left: 1px solid #858585;
    > table {
        border-collapse: collapse;
        width: 100%;
        text-align: center;
    }
    > p {
        font-size: 15px;
        font-weight: 600;
    }
`

export const MainTeamListContent = styled.tr`
    background-color: ${props => props.color}
`

