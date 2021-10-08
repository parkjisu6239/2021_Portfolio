import { NavLink } from "react-router-dom"
import styled from "styled-components"

export default function ProjectItem({project, id}) {
    function renderTag(tags) {
        return tags.map(tag => {
            return <StyledTag>{tag}</StyledTag>
        })
    }

    return (
        <NavLink to={`/project/${id}`}>
            <StyledItem>
                <StyledImage src={ `assets/project/${project.eng_title}/${project.image}`}/>
                <div>
                    <div>
                        <StyledTitle>{project.title}</StyledTitle>
                        <StyledEngTitle>{project.eng_title}</StyledEngTitle>
                    </div>
                    <StyledTagList>{renderTag(project.tag)}</StyledTagList>
                    <StyledDescription>{project.description}</StyledDescription>
                </div>
            </StyledItem>
        </NavLink>
    )
}

const StyledItem = styled.div`
    border: 1px solid #cecece;
    min-width: 300px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        transform: translate(0px, -10px);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }
`

const StyledImage = styled.img`
    width: 100%;
`

const StyledTitle = styled.span`
    font-size: 25px;
    font-weight: 900;
    margin-right: 10px;
`

const StyledEngTitle = styled.span`
    font-size: 15px;
    color: #565656;
`

const StyledDescription = styled.div`
    margin-top: 5px;
    color: #565656;

`

const StyledTagList = styled.div`
    display: flex;
    gap: 5px;
`

const StyledTag = styled.span`
    background-color: #658EDD;
    padding: 3px 7px;
    border-radius: 5px;
    font-size: 11px;
    color: white;
    &:hover {
        background-color: #4a79d2;
    }
`