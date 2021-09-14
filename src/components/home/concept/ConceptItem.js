import styles from './ConceptItem.module.css'

export default function ConceptItem({ item, clickItem, selectedItem }) {
    const image = require('../../../assets/concept/Fire_perspective_matte_s.png')

    return (
        <div onClick={() => clickItem(item)} className={`${styles.conceptitem} ${item === selectedItem && styles.active}`}>
            <div>
                <img src={ `../../../assets/${item.image}` }/>
                <div className={ styles.title }>{ item.title }</div>
                <div className={ styles.subtitle }>{ item.subtitle }</div>
            </div>
        </div> 
    )
}