import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex; 
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #001d43;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-bottom: 1px solid white;
    height: 14vh;
`

const StyledH1 = styled.h1`
    margin: 0;
    font-size:calc(25px + 1.2vw);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const StyledP = styled.p`
    font-size:calc(6px + 0.8vw);
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledH1>Kavi Lu</StyledH1>
            <StyledP id="resume-desc">My online Resume</StyledP>
        </StyledHeader>
    )
}