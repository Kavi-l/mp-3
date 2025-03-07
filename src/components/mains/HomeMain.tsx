import styled from "styled-components";
import {StyledMain, StyledHeader} from "./Styles";

const StyledContainer = styled.div`
    display:flex;
    flex-direction: row;
    min-height: 50vh; 
`

const StyledPhotoDiv = styled.div`
    background-color: lightblue;
    padding: 1% 2%;
    margin: 2%;
    margin-left: 3%;
    margin-right: 1%;
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`

const StyledImg = styled.img`
    margin: auto;
    max-width: 100%;
    border-radius: 50%;
    border: 4px solid black;
    align-self: center;
`

const StyledBio = styled.div`
    width: 65%;
    background-color: lightblue;
    padding: 0 4%;
    padding-bottom: 10%;
    text-align: center;
    margin: 2%;
    margin-right: 3%;
    flex-direction: column;
    border-radius: 25px;
`

const StyledDescriptionP = styled.p`  
    padding: 4% 4%;
    text-indent: 4%; 
`

const StyledH4 = styled.h4`
    padding: 10% 0;
`
export default function HomeMain() {
    return (
        <StyledMain>
            <StyledHeader>Home</StyledHeader>
            <StyledContainer>
                <StyledPhotoDiv>
                    <StyledImg src="/myphoto.png" alt="this is an image of myself"/>
                </StyledPhotoDiv>
                <StyledBio>
                    <StyledH4> Short Bio</StyledH4>
                    <p>
                        Hi! I'm a third-year Computer Science student at Boston University 
                        with a strong interest in coding and problem-solving. 
                        I have experience with languages like Python, Java, and C++ 
                        and enjoy learning new technologies. I’m especially interested in 
                        software engineering and AI. 
                        I'm looking for opportunities to apply my skills, 
                        gain real-world experience, and grow as a developer.
                    </p>
                </StyledBio>
            </StyledContainer>
            <StyledDescriptionP> This site serves as my online resume. It shows my education, 
                work experience, achievements, and references. It includes a short bio, a profile photo, 
                and links to projects. The organized layout makes it easy to explore my background 
                and qualifications.

            </StyledDescriptionP>
        </StyledMain>
    )
}