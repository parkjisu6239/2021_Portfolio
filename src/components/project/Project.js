import ProjectList from "./ProjectList"
import MarkdownRenderer from "../common/MarkdownRenderer"

function ProjectPage() {
    return (
        <main>
            <h1>Project</h1>
            <MarkdownRenderer/>
            <ProjectList/>
        </main>
    )
        
}

export default ProjectPage