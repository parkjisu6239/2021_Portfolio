import { useParams } from 'react-router-dom'

export default function ProjectDetail() {
    const id = useParams().id
    return (
        <article>
            { id }번 프로젝트 디테일
        </article>
    )
}