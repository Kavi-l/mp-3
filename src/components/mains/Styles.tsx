import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction:column;
    width: 75%;
    background: linear-gradient(to bottom,#022c5b, #70d1f5);

    @media screen and (max-width: 800px) {
        min-height: 80vh;
        width: 100%;
        align-self: center;
    }
`

export const StyledHeader = styled.h3`
    text-align: center;
    background-color: #0b306f;
    height: 6%;   
    width: 100%;
    padding: 5% 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white; 
    border-left: 1px solid white; 
    color: white;
    font-size:calc(10px + 1.5vw);
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const StyledContainer = styled.div`
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
`

export const StyledDiv = styled.div`
    padding: 0 2%;
    margin: 0 4%;
    margin-right: 3%;
    border-left: 12px solid black;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`

export const StyledDate = styled.p`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`