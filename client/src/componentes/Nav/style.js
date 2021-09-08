import styled from 'styled-components';
import img from '../../images/c59ad2bd4ad2fbacd04017debc679ddb.gif'

const DivStyle = styled.div
`@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
background-image: url(${img});
background-size: cover;


font-family: 'Staatliches', cursive;
font-size:1.3rem;
display: flex;
justify-content:center;
margin:0;
.link{
    text-decoration:none;
    margin-left: 30px;
    margin-right: 30px;
    color:white;
    text-shadow: 2px 2px black;
    font-size:1.5rem;
}
`

export default DivStyle;