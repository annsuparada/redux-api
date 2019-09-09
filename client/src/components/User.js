import React from 'react';
import { Name, Wrapper } from './style'

const User = props => {
    return (
        <>
        <Wrapper>
            <Name>{props.user.name}</Name>
        </Wrapper>
        </>
    )
}

export default User;