import { StyledMain, StyledHeader, StyledContainer, StyledDiv, StyledDate } from "./Styles";


export default function AchievementsMain() {
    return (
        <StyledMain>
            <StyledHeader>Achievements</StyledHeader>
            <StyledContainer>
                <StyledDiv>
                    <StyledDate>
                        <strong>QuestBridge Scholar</strong>
                        <span>Sept 2024 - Dec 2024</span>
                    </StyledDate>
                </StyledDiv>
                <StyledDiv>
                    <StyledDate>
                        <strong> Boston University College of Arts & Sciences Dean’s List  </strong>
                        <span>Sept 2022 - Present</span>
                    </StyledDate>
                </StyledDiv>
                <StyledDiv>
                    <StyledDate>
                        <strong> AP Scholar with Distinction </strong>
                        <span>2018-2022</span>
                    </StyledDate>
                </StyledDiv>
            </StyledContainer>
        </StyledMain>
    )
}