import styles from './SpecializeItem.module.css'

export default function SpecializeItem({selectedItem, clickItem, item}) {
    return (
        <div onClick={() => clickItem(item)} className={`${styles.specializeItem} ${item === selectedItem && styles.active}`}>
            <img  className={ styles.image } src={ `assets/${item.image}` }/>
            <div className={ styles.title }>{ item.title }</div>
        </div>
    )
}