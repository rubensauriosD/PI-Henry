import styled from 'styled-components';
import img from '../../images/c59ad2bd4ad2fbacd04017debc679ddb.gif'

const DivStyle = styled.div
`
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
background-image:url(${img});
background-repeat: repeat;
color:white;
text-shadow: 2px 2px black;
font-family: 'Staatliches', cursive;
font-size:1.4rem;
.utils{
    display:flex;
    justify-content:space-around;
}
input, button{
font-family: 'Staatliches', cursive;
font-size:1.3rem;
margin-left:1rem;
margin-right:1rem;
.loading {
    width:100px;
    height:100px;
    border-radius:50%;
    border:5px solid black;
    background:transparent;
    border-top-color:#efef;
    border-bottom-color: #efef;
    border-left-color: black;
    animation:spin 1.5s linear infinite;
    position:relative;
}
.content{
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#fff;
}
@keyframes spin{
    0%{
    background:transparent;
    transform: rotate(720deg); 
    }
}
` 

export default DivStyle;