import styled from 'styled-components';
import img from '../../images/c59ad2bd4ad2fbacd04017debc679ddb.gif'

export const DivStyle = styled.div
`
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
color:white;
text-shadow: 2px 2px black;
font-family: 'Staatliches', cursive;
.conteiner{
    width:1200px;
    higher:1200px;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    align-items: center;
}
img{
    width:100%;
}
li{
    list-style:none
}
ul{
    padding-inline-start:0;
    margin:0;
}
p,li{
    font-size:1.2rem;
}
h2{
    margin:1rem;
}
p{
    margin:0;
}
`

export const DivStyle2 = styled.div
`
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
background-image:url(${img});
background-size: cover;
background-repeat: repeat;
button{
    font-family: 'Staatliches', cursive;
    font-size:1.5rem;
}
`

