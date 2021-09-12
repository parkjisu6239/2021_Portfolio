import { useRouter } from 'next/router'
import ProjectDetail from '../../components/project/projectDetail'

const ProjectDetailPage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <p>project: {id}</p>
            <ProjectDetail id={id}/>
        </div>
        
    )
}

export default ProjectDetailPage