import { StyledMain, StyledHeader} from "./Styles";
import styled from "styled-components";

const StyledContainer = styled.div`
    font-family: 'Times New Roman', Times, serif;
    font-size: calc(6px + 1vw);
    width: 100%;
    min-height: 75vh;
    background-color:white; 
    transform: scale(0.9);
    border-radius: 15px;
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const StyledTableTitle = styled.h4`
    text-align:center;
    font-size: calc(6px + 1.5vw);
    margin-bottom: 5%;
`

const StyledTable = styled.table`
    border-collapse: collapse; 
    width: 100%;
`

const StyledEntry = styled.td`
    border: 1px solid black; /* Adds lines inside the table */
    padding: 12px;
    text-align: center;
    margin: 0;
`


export default function ReferencesMain() {
    return (
        <StyledMain>
            <StyledHeader>References</StyledHeader>
            <StyledContainer>
                <div id="professional">
                    <StyledTableTitle>Professional</StyledTableTitle>
                    <StyledTable>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Contact</th>
                        </tr>
                        <tr>
                            <StyledEntry> Alicia Jaromin</StyledEntry>
                            <StyledEntry> Manager</StyledEntry>
                            <StyledEntry> (781) 888-3669</StyledEntry>
                        </tr>
                        <tr> 
                            <StyledEntry>Michael Matthewson</StyledEntry>
                            <StyledEntry>Manager</StyledEntry>
                            <StyledEntry>(781) 888-3669</StyledEntry>
                        </tr>
                    </StyledTable>
                </div>
                <div id = "personal">
                    <StyledTableTitle>Personal</StyledTableTitle>
                    <StyledTable>
                        <tr>
                            <th>Name</th>
                            <th>Relation</th>
                            <th>Contact</th>
                        </tr>
                        <tr>
                            <StyledEntry> Wei Lu</StyledEntry>
                            <StyledEntry> Father</StyledEntry>
                            <StyledEntry> (857) 800-5588</StyledEntry>
                        </tr>
                        <tr> 
                            <StyledEntry>Hui Lu</StyledEntry>
                            <StyledEntry>Sister</StyledEntry>
                            <StyledEntry>(617) 866-3237</StyledEntry>
                        </tr>
                    </StyledTable>
                </div>
            </StyledContainer>
        </StyledMain>
    )
}