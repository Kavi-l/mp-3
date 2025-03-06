import styled from "styled-components";
import {Link} from "react-router";

const StyledNav = styled.nav`
    width: 25%;
    padding: 0;
    margin: 0;
    background-color: #0b306f;
    height: 100vh;
    
    @media screen and (max-width: 800px){
        width: 100%;
        height: 100%;
        border-bottom: 1px solid white; 
    }
`

const StyledUl = styled.ul`
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    list-style: none;
    /* background-color:red; */
    margin: 0;
    padding: 0;
    width: 100%;

    @media screen and (max-width: 800px){
        flex-direction: row;
        padding: 0.5%;
        margin: 0.5%;
    }
`

const StyledLi = styled.li`
    font-size: calc(2px + 1.5vw);
    padding: 5%;
    margin: 1% 15%;
    border-radius: 4px;
    text-align: center;
    height: 1vh;

    @media screen and (max-width: 800px){
        height: 1%;
        font-size: calc(0.5px + 1.5vw);
        padding: 2% 1.5%;
        margin: 1% .5%; 
    }
`

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-transform: uppercase;
`

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi> <StyledLink to="/">Home</StyledLink></StyledLi>
                <StyledLi> <StyledLink to="/education">Education</StyledLink></StyledLi>
                <StyledLi> <StyledLink to="/employment">Employment</StyledLink></StyledLi>
                <StyledLi> <StyledLink to="/achievements">Achievements</StyledLink></StyledLi>
                <StyledLi> <StyledLink to="/references">References</StyledLink></StyledLi>
                <StyledLi> <StyledLink to="/projects">Projects</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}