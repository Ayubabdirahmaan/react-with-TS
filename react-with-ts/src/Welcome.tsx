import React from 'react'

interface Welcome {
    username: string,
    isPremium: boolean
}
export const Welcome = ({ username, isPremium }: Welcome) => {
    return (
        <>
           <p>{isPremium ? `welcome ${username}`: 'welcome guest'}</p>
        </>
    )
}
