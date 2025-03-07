import styled from "styled-components";
import {StyledContainer, StyledMain, StyledHeader, StyledDiv} from "./Styles";
import Calculator from "./Calculator";

const StyledH4 = styled.h4`
    text-align: center;
    margin: 6% 0;
    font-size: calc(10px + 1vw);
`

const StyledProjectsContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 0;
    height: 60vh;
`


export default function ProjectsMain() {
    return (
        <StyledMain>
            <StyledHeader>Project</StyledHeader>
            <StyledContainer>
                <StyledH4><a href="https://github.com/Kavi-1?tab=repositories" target="_blank">GitHub</a></StyledH4>
                <StyledProjectsContainer> 
                    <StyledDiv>
                        <h4>Connect Four</h4>                        
                        <ul >
                            <li>Created a customizable Connect Four game in Python, featuring player vs. player and player vs. AI modes</li>
                            <li> Designed an intelligent AI player using a minimax algorithm for strategic gameplay</li>
                        </ul>
                    </StyledDiv>
                    <StyledDiv>
                        <h4>Memory Match</h4>                        
                        <ul>
                            <li>
                                Developed an interactive Memory Match game in Java with customizable gameplay,
                                including shuffling and scoring features
                            </li>
                            <li>
                                Demonstrated strong problem-solving skills by efficiently using arrays and loops 
                                to enable dynamic player turns and match handling in the Memory Match project
                            </li>
                        </ul>
                    </StyledDiv>
                    
                    <StyledDiv>
                        <h4>Calculator</h4>                        
                        <ul>
                            <li>
                                Developed Calculator within this page (below)
                            </li>
                            <li>
                                Interactive operations including addition, subtraction, multiplication, division, and exponent
                            </li>
                        </ul>
                    </StyledDiv>
                </StyledProjectsContainer>   
                <Calculator/>  
            </StyledContainer>
        </StyledMain>


    )
}