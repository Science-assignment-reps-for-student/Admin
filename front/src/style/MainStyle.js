import styled from 'styled-components'


export const MainDiv = styled.div`
    padding: 30px;
    display:flex;
    > div{
        height: 88vh;
        overflow: scroll;
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
        justify-content: space-around;
        > div{
            > h2 {
                margin: 10px;
            }
        }
    }
`

export const MainClass = styled.div`
    width: 695px;
    height: 281px;
    background: white;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    > h3 {
        margin: 10px;
    }
    > div{
        height: 235px;
        display: flex;
    }
`

export const MainClassCount = styled.div`
    width: 448px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    > div{
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
`

export const MainClassCoutColoredBar = styled.div`
    width: ${props => 189 / props.max * props.count }px;
    height: 4px;
    background: ${props => props.count >= 20 ? "#FF6F61" : "#0073AA"};
`

export const MainList = styled.div`
    width: 246px;
    height: 100%;
    overflow: scroll;
    border-left: 1px solid #858585;
    > table {
        border-collapse: collapse;
        width: 100%;
        text-align: center;
    }
`

export const MainListContent = styled.tr`
    background: ${props => props.isCheck ? "#F5F5F5" : "white"};
    height: ${props => props.isHeader ? 35 : 25}px;
    font-weight: 600;
`

export const MainButtonDiv = styled.div`
    width: 448px;
    height: 30%;
    display: flex;
    align-self: flex-end;
    align-items: center;
`

export const MainButton = styled.button`
    width: 95px;
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
    > span {
        font-weight: 600;
        font-size: 13px;
    }
`