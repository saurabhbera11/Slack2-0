import styled from 'styled-components'
import React from 'react'

function Message({ message, timestamp, user, userImage }) {
    return (
        <MessageContainer>
            <img src={userImage} alt="" />
            <MessageInfo>
                <h4>
                    {user}
                    <span>
                        {new Date(timestamp?.toDate()).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}
                    </span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div`
display: flex;
align-items: center;
padding:20px;

>img{
    height:50px;
    border-radius:8px;
}
`;

const MessageInfo = styled.div`
padding-left: 8px;
>h4>span{
    color:grey;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
}
`;
