import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { IoLogoCss3, IoLogoHtml5, IoLogoPython } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact, IoLogoVue } from "react-icons/io5";

export default function Language({ progress }) {
  function renderProgress() {
    return Object.keys(progress).map(key => {
        return ( 
          <ProgressBar key={key} data={progress[key]} language={key}/>
        )
    })
  }

  return (
    <StyledLanguageContainer>
      <div>
        <h3>Language</h3>
        <StyledLanguage>
          {renderProgress()}
        </StyledLanguage>
      </div>
      <div>
        <h3>Best</h3>
        <StyledImageGroup>
          <IoLogoCss3 size={80} color={"#2D98CC"}/>
          <IoLogoHtml5 size={80} color={"#E96329"}/>
          <IoLogoJavascript size={80} color={"#E8D34D"}/>
          <IoLogoPython size={80} color={"#356C9B"}/>
          <IoLogoReact size={80} color={"#01B4E7"}/>
          <IoLogoVue size={80} color={"#00BB7C"}/>
        </StyledImageGroup>
      </div>
    </StyledLanguageContainer>
  )
}

const StyledLanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1000px) {
    gap: 60px;
  }
`;

const StyledLanguage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledImageGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & svg {
    transition: all 0.2s ease;
    cursor: pointer;
  }
  & svg:hover {
    transform: translate(0px, -10px);
  }
`;