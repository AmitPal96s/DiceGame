import styled from 'styled-components';
export const Button = styled.button`

min-width: 220px;    
color: #fff;
padding: 10px 20px;

background: #000000;
border-radius: 5px;
border: none;
font-size: 18px;
cursor: pointer;
border: 1px solid transparent;
transition:0.3s background ease-in;

&:hover{
    background-color: #fff;
    border: 1px solid black;
    color: black;
    transition:0.3s background ease-in;
}
`

export const OutlinedButton = styled(Button)`


background-color: transparent;
border: 1px solid black;
color: black;
transition:0.3s background ease-in;

&:hover{
    background-color: #000000;
    border: 1px solid black;
    color: #fff;
    transition:0.3s background ease-in;
}
`