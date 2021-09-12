import styles from './ConceptItem.module.css'

export default function ConceptItem({ item }) {
    return (
        <div className={ styles.conceptitem }>
            <div className={ styles.title }>{ item.title }</div>
            <div className={ styles.content }>{ item.content }</div>
        </div> 
    )
}