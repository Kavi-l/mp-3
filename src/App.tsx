import { createBrowserRouter, Route, RouterProvider, Routes, useParams } from "react-router";
import {useEffect} from "react";
import styled from "styled-components";

import Header from "./components/Header.tsx"
import Nav from "./components/Nav.tsx";

import HomeMain from "./components/mains/HomeMain.tsx";
import EducationMain from "./components/mains/EducationMain.tsx";
import EmploymentMain from "./components/mains/EmploymentMain.tsx";
import AchievementsMain from "./components/mains/AchievementsMain.tsx";
import ReferencesMain from "./components/mains/ReferencesMain.tsx";
import ProjectsMain from "./components/mains/ProjectsMain.tsx";

import Footer from "./components/Footer.tsx";

const StyledPageWrapperDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
`

const StyledNavMainContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: #0b306f;

    @media screen and (max-width: 800px){
      display: flex;
      flex-direction: column;
    }
`

function Root() {
  const currentPath = useParams();
  let lastValue = Object.values(currentPath).pop() || "";
  lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);

  useEffect(() => {
    if (lastValue === "") {
      document.title = "Home";
    } else {
      document.title = lastValue+" | Resume";
    }
  }, [lastValue]);

  return (
    <StyledPageWrapperDiv>
      <Header/>
      <StyledNavMainContainerDiv>
        <Nav/>
        <Routes>
          <Route path="/" element= {<HomeMain/>} />
          <Route path="/education" element = {<EducationMain/>} />
          <Route path="/employment" element = {<EmploymentMain/>} />
          <Route path="/achievements" element = {<AchievementsMain/>} />
          <Route path="/references" element = {<ReferencesMain/>} />
          <Route path="/projects" element = {<ProjectsMain/>} />
        </Routes>
      </StyledNavMainContainerDiv>
      <Footer/>
    </StyledPageWrapperDiv>
  )
}

const router = createBrowserRouter([{path:"*", Component: Root}])

export default function App() {
  return <RouterProvider router={router}/>
}