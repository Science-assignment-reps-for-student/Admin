import React from 'react'

const HomeworkFileContent = ({children,file,fileChange}) => {

    const deleteFile = (e) => {
        e.preventDefault();
        let buffer = file;
        buffer = buffer.filter((file)=> {
            return file.name !== children;
        });
        fileChange(buffer);
    }

    return (
        <p>{children}<span onClick={deleteFile}>&#10060;</span></p>
    )
}

export default HomeworkFileContent;