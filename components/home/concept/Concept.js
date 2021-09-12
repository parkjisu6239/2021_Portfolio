import styles from './Concept.module.css'
import ConceptItem from './ConceptItem'

export default function Concept() {
    const conceptList = [
        {
            title: '열정',
            content: '열정이있다 어쩌구'
        },
        {
            title: '기록과 정리',
            content: '정리를 잘한다'
        },
        {
            title: '소통과 협업',
            content: '지라 깃플로우'
        },
        {
            title: '유연함',
            content: '빠르게 배우고 빠르게 써먹음'
        }
    ]

    function renderConcpet() {
        return conceptList.map( ele => {
            return ( 
                <ConceptItem item={ele} key={ ele.title }/>
            )
        })
    }
        
    return (
        <article className={ styles.concept }>
            나를 표현하는 3단어를 이런거야
            <div className={ styles.conceptList }>
                { renderConcpet() }
            </div>
        </article>
    )
}