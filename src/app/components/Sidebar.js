import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import SideBarOptions from './SideBarOptions';
import AddIcon from '@material-ui/icons/Add'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth"

function Sidebar() {
    const [channels] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth);
    return (
        <SidebarContainer>
            <SideBarHeader>
                <SidebarInfo>
                    <h3>Bera's Chathouse</h3>
                    <h4><FiberManualRecordIcon />{user.displayName}</h4>
                </SidebarInfo>
                <CreateIcon />
            </SideBarHeader>
            <SideBarOptions Icon={InsertCommentIcon} title="Threads" />
            <SideBarOptions Icon={InboxIcon} title="Mentions & reactions" />
            <SideBarOptions Icon={DraftsIcon} title="Saved items" />
            <SideBarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SideBarOptions Icon={PeopleAltIcon} title="People & User Groups" />
            <SideBarOptions Icon={AppsIcon} title="Apps" />
            <SideBarOptions Icon={FileCopyIcon} title="File Browser" />
            <SideBarOptions Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            <SideBarOptions Icon={ExpandMoreIcon} title="Show Mode" />
            <hr />
            <SideBarOptions Icon={AddIcon} title="Add Channel" addChannelOption />
            {channels?.docs.map((doc) => {
                return <SideBarOptions
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />
            })}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
background-color: var(--slack-color);
flex:0.3;
color:white;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;

>hr{
    margin-top:10px;
    margin-bottom: 10px;
    border:1px solid #49274b;
}
`;

const SideBarHeader = styled.div`
display:flex;
border-bottom:1px solid #49274b;
padding:13px;
>.MuiSvgIcon-root{
    padding:8px;
    color:#49274b;
    font-size:18px;
    background-color:white;
    border-radius:999px;
}
`;

const SidebarInfo = styled.div`
flex:1;
>h3{
    font-size:15px;
    font-weight:900;
    margin-bottom:5px;
}
>h4{
    display:flex;
    font-size:13px;
    font-weight:400;
    align-items: center;
}
>h4> .MuiSvgIcon-root{
    color: green;
    font-size:14px;
    margin-right:2px;
    color:green;
}
`;