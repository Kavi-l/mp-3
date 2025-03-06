import styled from "styled-components";
import { Link } from "react-router";

const StyledFooter = styled.footer`
    display: flex; 
    background-color: #001d43;
    height: 6vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledP = styled.p`
    color: white;
    text-decoration: none;
`

export default function Footer() {
    return(
        <StyledFooter>
            <StyledP>All rights reserved: <Link to="">Credits</Link>&#169;</StyledP >
        </StyledFooter>
    )
}