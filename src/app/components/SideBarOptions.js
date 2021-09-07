import React from 'react'
import styled from 'styled-components'
import { db } from '../../firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../../features/appSlice';
function SideBarOptions({ Icon, title, addChannelOption, id }) {

    const dispatch = useDispatch();
    const addChannel = () => {
        const channelName = prompt('Please add a channel');
        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    };
    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id,
            }));
        }
    };
    return (
        <SideBarOptionsContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (<SideBarOptionsChannels>
                <span>#</span> {title}
            </SideBarOptionsChannels>
            )}
        </SideBarOptionsContainer>
    )
}

export default SideBarOptions


const SideBarOptionsContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left:2px;
cursor: pointer;

:hover{
    background-color:#340e36;
    opacity: 0.9;;
}
>h3{
    font-weight: 500;
}
>h3 >span{
    padding:15px;
}
`;
const SideBarOptionsChannels = styled.h3`
padding:10px 0;
font-weight: 300;
`;