import { StyledMain, StyledHeader, StyledContainer, StyledDiv, StyledDate } from "./Styles";

export default function EducationMain() {
    return (
        <StyledMain>
            <StyledHeader>Education</StyledHeader>
            <StyledContainer>
                <StyledDiv>
                    <StyledDate>
                        <strong>Boston University | Boston, MA</strong>
                            <span>May 2026</span>
                    </StyledDate>
                    <p>
                        <em>Candidate for Bachelor of Arts in Computer Science</em>, GPA: 3.84
                    </p>
                </StyledDiv>
                <StyledDiv>
                    <StyledDate>
                         <strong>Malden High School | Malden, MA </strong>
                         <span>May 2022</span>
                    </StyledDate>
                    <p>
                        <em>High School Diploma</em>
                    </p>
                </StyledDiv>
            </StyledContainer>                
        </StyledMain>
    )
}