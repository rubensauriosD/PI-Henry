import styled from 'styled-components';
import img from '../../images/c59ad2bd4ad2fbacd04017debc679ddb.gif'

const DivStyle = styled.div
`
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
background-image:url(${img});
background-size: cover;
background-repeat: no-repeat;

form{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:1rem;
}
label{
    font-size:1.5rem;
    font-family: 'Staatliches', cursive;
    color:white;
    text-shadow: 2px 2px black;
}
input, select, textarea, button{
    font-size:1rem;
    font-family: 'Staatliches', cursive;
    font-size:1.3rem;
}

`

export default DivStyle;