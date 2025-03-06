import styled from "styled-components";
import { useState } from "react";
import useColor from "./useColor";

const CalcContainer = styled.div`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: lightblue; */
    padding-bottom: 5%;
    font-family: "Source Code Pro", serif;
`

const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
    height: 40vh;
`   

const SectionDiv = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding: 0;
`

const OperationsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 15%;
`

const OperationsButton = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    font-family: "Source Code Pro", serif;
    font-size: 20px;
    box-shadow: 2px 2px 8px black;
    color: #ffcf93;
    color: #733f2d;
`

const StyledInput = styled.input`
    height: 25%;
    width: 75%;
    text-align: center;
    border-radius: 10px;
    margin: 0;
    font-family: "Source Code Pro", serif;
    font-size: 30px;
`
const ClearDiv = styled.div`
    width: 125px;
    height: 75px;
    display: flex;
    margin-top:0;
    justify-content: center;
    align-items: center;
`
const ClearButton = styled.button`
    width: 100px;
    font-size: 18px;
    font-family: "Source Code Pro", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 26, 26)
`

const OutputDiv = styled.div`
    height: 80px;
    width: 50%;
    border: 1px solid black;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;   
    font-family: "Source Code Pro", serif;
`

const StyledOutput = styled.h3<{ color: string }>`
    font-family: "Source Code Pro", serif;
    color: ${(props) => props.color};  
`;


export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [result, setResult] = useState("");

    const outputColor = useColor(result);

    function addition() {
        if (firstNumber !== "" && secondNumber !== "") {
            let result = String(Number(firstNumber) + Number(secondNumber));
            setResult(result);
        }
    }

    function subtraction () {
        if (firstNumber !== "" && secondNumber !== "") {
            setResult(String(Number(firstNumber) - Number(secondNumber)));
        }
    }

    function multiplication() {
        if (firstNumber !== "" && secondNumber !== "") {
            let result = String(Number(firstNumber) * Number(secondNumber))
            setResult(result);
        }
    }

    function division() {
        if (firstNumber !== "" && secondNumber !== "") {
            if (Number(secondNumber) === 0) {
                setResult("undefined");
            }
            else {
                let result = String(Number(firstNumber) / Number(secondNumber))
                setResult(result);
            }
        }
    }

    function power() {
        if (firstNumber !== "" && secondNumber !== "") {
            const first = Number(firstNumber);
            const second = Number(secondNumber);
            let result = 1;

            for (let i = 0; i < second; i++) {
                result = result * first;
            }
            setResult(String(result));
        }
    }

    function clearFields() {
        setFirstNumber(""); 
        setSecondNumber("");
        setResult("");
    }

    return (
        <CalcContainer>
            <MainDiv>
                <SectionDiv>
                    <label htmlFor="firstNumber">1st #</label>
                    <StyledInput 
                        type="text" 
                        id="firstNumber"
                        value={firstNumber} 
                        onChange={(e) => setFirstNumber(e.target.value)}
                    /> 
                </SectionDiv>
        
                <OperationsDiv>
                    <div><OperationsButton onClick={addition}>+</OperationsButton></div>
                    <div><OperationsButton onClick={subtraction}>-</OperationsButton></div>
                    <div><OperationsButton onClick={multiplication}>&#215;</OperationsButton></div>
                    <div><OperationsButton onClick={division}>&#247;</OperationsButton></div>
                    <div><OperationsButton onClick={power}>^</OperationsButton></div>
                </OperationsDiv>
                <SectionDiv>
                    <label htmlFor="secondNumber">2nd #</label>
                    <StyledInput 
                        type="text" 
                        id="secondNumber"
                        value={secondNumber}
                        onChange={(e) => setSecondNumber(e.target.value)}
                    />
                </SectionDiv>
        
            </MainDiv>
        
            <ClearDiv> 
                <ClearButton onClick={clearFields}>CLEAR</ClearButton>
            </ClearDiv>
        
            <OutputDiv>
                <StyledOutput color={outputColor}>{result}</StyledOutput>
            </OutputDiv>
        </CalcContainer>         
    )
}