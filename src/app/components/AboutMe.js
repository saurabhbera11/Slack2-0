import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from '@material-ui/core'
function Aboutme() {
    return (
        <Container>
            <InnerContainer>
                <h2>Designed And Created By</h2>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEAzh1yYc64GQ/profile-displayphoto-shrink_800_800/0/1594706546686?e=1634169600&v=beta&t=i_JQ6jMf63JdmJBM5KpgFRuGV7ltVBix2l5e-j9WxbA" alt="" />
                <h3>Sourabh Bera</h3>
                <a href="https://www.linkedin.com/in/saurabh-bera-610ba0156/">
                    <p>LinkedIn</p> <LinkedInIcon></LinkedInIcon>
                </a>


            </InnerContainer>
        </Container>
    )
}

export default Aboutme

const Container = styled.div`
background-color: #f8f8f8;
height:80vh;
display:flex;
align-items: center;
justify-content: center;    
`

const InnerContainer = styled.div`
font-family: cursive;
padding: 100px 150px;
text-align:center;
background-color: white;
border-radius:10px;
box-shadow:0 1px 3px rgba(0, 0, 0, 0.12),0 1px 2px rgba(0, 0, 0, 0.24);
>img {
    object-fit:contain;
    height:200px;
    margin-bottom: 40px;
    border-radius: 1000px;
}
>h2{
    margin-bottom:30px;
}
.MuiSvgIcon-root{
 font-size:20px;
}
>a {
    display:flex;
    flex:0.3;
    padding: 5px;
    align-items: center;
    justify-content: center;
    margin-top:10px;
    background-color: black !important;
    color: white;
    border-radius:20px;
    text-decoration: none;
}
>a:hover {
   color: grey;

}
>p{
    margin-right: 10px;
}   

`