import React, { createContext, useState } from 'react'

const AccessTokenContext = createContext({
    state: {
        accessToken: "",
    },
    actuibs: {
        accessTokenChange: ()=> {},
    }
});

const AccessTokenProvider = ({ children }) => {
    const buffer = localStorage.getItem('access_token');
    const [accessToken,accessTokenChange] = useState(buffer);

    const value = {
        state: {
            accessToken: accessToken,
        },
        actions: {
            accessTokenChange: accessTokenChange,
        }
    }
    return (
        <AccessTokenContext.Provider value={value}>
            {children}
        </AccessTokenContext.Provider>
    )
}

const { Consumer: AccessTokenConsumer } = AccessTokenContext;

export { AccessTokenProvider, AccessTokenConsumer };
export default AccessTokenContext;