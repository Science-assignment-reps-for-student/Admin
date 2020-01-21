import React from 'react'
import * as S from '../../../style/HomeworkStyle'
import { fileImg } from '../../../img'
import { HomeworkFileContent } from '../component'

const HomeworkFile = ({file,fileChange}) => {


    const inputChange = (e) => {
        const fileBuffer = e.target.files;
        const fileLength = fileBuffer.length;
        let buffer = setBuffer(fileBuffer,fileLength);
        fileChange(buffer);
    }
    
    const setBuffer = (fileBuffer,fileLength) => {
        let buffer = [];
        if(Array.isArray(file)){
            buffer = [...file];
        }
        for(let i = 0;i < fileLength; i++){
            buffer.push(fileBuffer[i])
        }
        return buffer;
    }

    return (
        <S.HomeworkFile>
            {
                file.length ? file.map((e)=><HomeworkFileContent file={file} fileChange={fileChange}>{e.name}</HomeworkFileContent>) : <div>
                    <img src={fileImg} alt="file"/>
                    첨부파일
                    </div>
            }
            <input multiple onChange={inputChange} type="file"/>
        </S.HomeworkFile>
    )
}

export default HomeworkFile;