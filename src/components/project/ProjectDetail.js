import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import MarkdownRenderer from "../common/MarkdownRenderer"
import ProjectItem from "./ProjectItem"

export default function ProjectDetail() {
    const id = useParams().id
    const project = require('../../db/project.json')[id]
    const md = require(`../../../public/assets/project/${project.eng_title}/readme.md`).default

    return (
        <StyledProjectDetail>
            { id }번 프로젝트 디테일, {project.title} / {project.eng_title}
            {project.tag}
            <MarkdownRenderer md={md}/>
        </StyledProjectDetail>
    )
}

const StyledProjectDetail = styled.article`
    padding: 50px 15vw;
`