import styles from './SelectedItem.module.css'

export default function SelectedItem({item}) {
    return (
        <div className={styles.selectedItem}>
            <div className={ styles.header }>
                <img  className={ styles.image } src={ `assets/${item.image}` }/>
                <div>
                    <div className={ styles.title }>{ item.title }</div>
                    <div className={ styles.subtitle }>{ item.subtitle }</div>
                </div>
            </div>
            <hr width="100%"/>
            <div className={ styles.description }>{ item.description }</div>
        </div>
    )
}