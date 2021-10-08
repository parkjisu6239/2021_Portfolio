import styled from "styled-components"
import ProjectItem from "./ProjectItem"

export default function ProjectList() {
    const projectList = require('../../db/project.json')

    function renderProjectList() {
        return projectList.map((project, idx) => {
            return <ProjectItem project={project} key={idx} id={idx}/>
        })
    }

    return (
        <article>
            <StyledProjectList>
                {renderProjectList()}
            </StyledProjectList>
        </article>
    )
}

const StyledProjectList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (min-width: 841px) and (max-width: 1235px) {
        grid-template-columns: repeat(2, 1fr);
    };
    @media (max-width: 840px) {
        grid-template-columns: repeat(1, 1fr);
    };
`