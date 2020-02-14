import React, { useState, useEffect, useCallback } from 'react';
import { Header, BackgroundWhite } from '../public';
import * as S from './style/MainStyle';
import { MainContent, MainNav } from './component';
import { refreshAccessTokenURL, personalHomeworkURL, teamHomeworkURL, getUserInfoURL, experimentHomeworkURL,allFileDownloadURL,getFileCodeURL } from '../resource/serverURL';
import { refreshAccessToken, getUserInfo, getIsExpiration } from '../resource/publicFunction';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

const AdminMain = ({ state, actions, history }) => {

    const [ isLoaded, _loadedChange ] = useState();
    const [ data, _dataChange ] = useState({
        0: {
            homework_info: [],
            homework_type: 0
        },
        1: {
            homework_info: [],
            homework_type: 1
        },
        2: {
            homework_info: [],
            homework_type: 2
        },
    });
    const [ content, _contentChange ] = useState({
        0: [],
        1: [],
        2: [],
    });
    const [ checked, _checkedChange] = useState({
        class_1: true,
        class_2: true,
        class_3: true,
        class_4: true,
    });
    const [ homeworkType, _typeChange ] = useState({
        0: true,
        1: false,
        2: false,
    })

    const { accessToken, refreshToken } = state;
    
    const header = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    const loadedChange = useCallback((e)=> {
        _loadedChange(e);
    },[])

    const dataChange = useCallback((e)=> {
        _dataChange(e)
    },[])

    const contentChange = useCallback((e)=> {
        _contentChange(e);
    },[])

    const typeChange = useCallback((e)=> {
        _typeChange(e);
    },[])

    const checkedChange = useCallback((e)=>{
        _checkedChange(e);
    },[])

    useEffect(()=> {
        const isAdmin = getUserInfo(getUserInfoURL,accessToken);
        isAdmin
        .then((userType)=> {
            if(!userType){
                history.push('/admin/Login');
            } else {
                getPersonalHomework(personalHomeworkURL,header,checked,data,content);
            }
        })
        .catch((e)=> {
            history.push('/admin/Login');
        })
    },[]);

    useEffect(()=> {
        if(isLoaded){   
            getPersonalHomework(personalHomeworkURL,header,checked,data,content);
        }
    },[refreshToken])

    const allFileDownload = useCallback((contentId) => {
        const fileHeader = {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            },
            responseType: "blob",
        }
        axios.get(`${getFileCodeURL}/${contentId}`,header)
        .then((e)=> {
            const zipName = e.data.file_zip_info;
            axios.get(`${allFileDownloadURL}/${contentId}`,fileHeader)
            .then((response)=> {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(response.data);
                link.download = zipName;
                link.click();
            })
        })
        .catch((e)=> {
            getIsExpiration(e) 
            ? refreshAccessToken(refreshToken,actions,refreshAccessTokenURL) 
            : alert("네트워크를 확인해 주세요.");
        })
    },[accessToken,actions,header,refreshToken])

    
    const makeContent = useCallback((data,type,checked) => {
        let buffer = [];
        data.map((contentData)=> {
            const { created_at, homework_description, homework_id, homework_title, ...classData } = contentData;
            buffer.push(<MainContent 
                type={type} 
                checked={checked} 
                title={homework_title} 
                classData={classData} 
                key={homework_id} 
                contentId={homework_id}
                fileDownload={allFileDownload}
                />);
            return contentData;
        });
        return buffer;
    },[allFileDownload])

    const getExperimentHomework = useCallback((url,header,checked,data,content) => {
        axios.get(url,header)
        .then((e)=> {
            const homeworkData = e.data;
            const { homework_info, homework_type } = homeworkData;
            content[2] = makeContent(homework_info,homework_type,checked);
            data[2] = homeworkData;
            dataChange(data);
            contentChange(content);
            loadedChange(true);
        })
        .catch((e)=> {
            getIsExpiration(e) 
            ? refreshAccessToken(refreshToken,actions,refreshAccessTokenURL) 
            : alert("네트워크를 확인해 주세요.");
        })
    },[actions,contentChange,loadedChange,dataChange,makeContent,refreshToken])

    const getTeamHomework = useCallback((url,header,checked,data,content) => {
        axios.get(url,header)
        .then((e)=> {
            const homeworkData = e.data;
            const { homework_info, homework_type } = homeworkData;
            content[1] = makeContent(homework_info,homework_type,checked);
            data[1] = homeworkData;
            getExperimentHomework(experimentHomeworkURL,header,checked,data,content);
        })
        .catch((e)=> {
            getIsExpiration(e) 
            ? refreshAccessToken(refreshToken,actions,refreshAccessTokenURL) 
            : alert("네트워크를 확인해 주세요.");
        })
    },[actions,getExperimentHomework,makeContent,refreshToken])

    const getPersonalHomework = useCallback((url,header,checked,data,content) => {
        axios.get(url,header)
        .then((e)=> {
            const homeworkData = e.data;
            const { homework_info, homework_type } = homeworkData;
            const contentBuffer = Object.assign({},content);
            const dataBuffer = Object.assign({},data);
            contentBuffer[0] = makeContent(homework_info,homework_type,checked);
            dataBuffer[0] = homeworkData;
            getTeamHomework(teamHomeworkURL,header,checked,dataBuffer,contentBuffer);
        })
        .catch((e)=> {
            getIsExpiration(e) 
            ? refreshAccessToken(refreshToken,actions,refreshAccessTokenURL) 
            : alert("네트워크를 확인해 주세요.");
        })
    },[actions,refreshToken,getTeamHomework,makeContent])


    useEffect(()=> {
        if(isLoaded){
            const keys = Object.keys(data);
            const contentBuffer = Object.assign({},content);
            keys.map((key)=> {
                const { homework_info, homework_type } = data[key];
                contentBuffer[key] = makeContent(homework_info,homework_type,checked);
                return key;
            })
            contentChange(contentBuffer);
        }
    }, [checked,content,contentChange,data,isLoaded,makeContent]);


    const getArrowHomework = (homeworkType,content) => {
        const typeKey = Object.keys(homeworkType);
        let buffer = [];
        typeKey.map((key)=> {
            if(homeworkType[key]){
                buffer = [...buffer,...content[key]];
            }
            return key;
        })
        return buffer;
    }

    return (
        <>
            <Header/>
            <BackgroundWhite>
                <S.MainDiv>
                    <div>
                        <h1>제출 현황</h1>
                        <hr/>
                        {
                            getArrowHomework(homeworkType, content).length > 0 && isLoaded ? getArrowHomework(homeworkType,content) : 
                            <S.MainLoadingContent>
                                <div class="loadingio-spinner-gear-navzgsfup8"><div class="ldio-dlvqi1wu39l">
                                <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                </div></div>
                            </S.MainLoadingContent>
                        }
                    </div>
                    <div>
                        <MainNav typeChange={typeChange} checkedChange={checkedChange} checked={checked} type={homeworkType}/>
                    </div>
                </S.MainDiv>
            </BackgroundWhite>
        </>
    )
}

export default withRouter(AdminMain);