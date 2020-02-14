import React, { useCallback } from 'react';
import * as S from '../style/MainStyle';
import { MainListContent } from '../component';
import axios from 'axios';
import { getFileCodeURL, personalFileDownloadURL , refreshAccessTokenURL } from '../../resource/serverURL';
import { refreshAccessToken, getIsExpiration } from '../../resource/publicFunction';

const MainList = ({ studentList, text, contentId, state, actions }) => {

    const { accessToken, refreshToken } = state;
    const header = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        }
    }
    
    const personalFileDownload = useCallback((codeList,number) => {
        const downloadHeader = {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
            responseType: "blob"
        }
        codeList.map((e)=> {
            const { user_number, file_name, file_id } = e;
            if(number === user_number){
                axios.get(`${personalFileDownloadURL}/${file_id}`,downloadHeader)
                .then((file)=> {
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(file.data);
                    link.download = file_name;
                    link.click()
                })
                .catch(()=> {
                    getIsExpiration(e) 
                    ? refreshAccessToken(refreshToken,actions,refreshAccessTokenURL) 
                    : alert("네트워크를 확인해 주세요.");
                })
            }
            return e;
        })
    },[accessToken,refreshToken,actions]);

    const getFileCode = useCallback((number) => {
        if(contentId){
            axios.get(`${getFileCodeURL}/${contentId}`,header)
            .then((e)=> {
                const codeList = e.data.file;
                personalFileDownload(codeList,number);
            })
            .catch((e)=> {
                getIsExpiration(e) ? refreshAccessToken(refreshToken,actions,refreshAccessTokenURL) : alert("네트워크를 확인해 주세요.");
            })
        }
    },[actions,contentId,refreshToken,header,personalFileDownload])

    return ( 
        <S.MainList>
            <p>{text}</p>
            <table>
                <tbody>
                    <S.MainListContent>
                        <th>학번</th>
                        <th>이름</th>
                        <th>제출여부</th>
                    </S.MainListContent>
                    {
                        studentList.map(({user_name,user_number,submit}) => <MainListContent name={user_name} number={user_number} isChecked={submit} getFile={getFileCode}/>)
                    }
                </tbody>
            </table>
        </S.MainList>
    )
}

export default React.memo(MainList);