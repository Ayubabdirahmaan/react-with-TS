import React from 'react'

type UserInfo = {
    name: string,
    status: boolean
}
export const UserInfo = (props: UserInfo) => {
    return (
        <>
            <p>{props.status ? `welcome ${props.name}` : 'welcome user'}</p>
        </>
    )
}
