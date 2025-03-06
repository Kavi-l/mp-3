import { StyledMain, StyledHeader, StyledContainer, StyledDiv, StyledDate } from "./Styles";

export default function EmploymentMain() {
    return (
        <StyledMain>
            <StyledHeader>Employment</StyledHeader>
            <StyledContainer>
                <StyledDiv>
                    <StyledDate>
                        <strong>Boston University | Boston, MA</strong>
                        <span>Sept 2024 - Dec 2024</span>
                    </StyledDate>
                    <p><em>Grader</em></p>                     
                    <ul>
                        <li>Evaluated programming assignments for a Data Structures and Algorithms course, 
                            ensuring accurate grading based on established rubrics and coding standards
                        </li>
                        <li>Provided constructive feedback on algorithm design, code efficiency, 
                            and debugging techniques to help students enhance their understanding 
                            of foundational computer science concepts
                        </li>
                    </ul>
                </StyledDiv>
                <StyledDiv>
                    <StyledDate>
                        <strong>Malden High School | Malden, MA </strong>
                        <span>May 2022 - Present </span>
                    </StyledDate>
                    <p><em>IT Intern</em></p>                        
                    <ul>
                        <li>
                            Resolved 500+ help desk cases, showcasing strong problem-solving skills 
                            and commitment to effective technical support
                        </li>
                        <li>
                            Proficiently utilized Salesforce to maintain client data records
                        </li>
                        <li>
                            Regularly delivered product research presentations as part of an intern team, 
                            effectively communicating findings and insights on company products                            
                        </li>
                    </ul>
                </StyledDiv>
            </StyledContainer>
        </StyledMain>
    )
}