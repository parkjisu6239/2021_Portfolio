import { useState } from 'react';
import styles from './Specialize.module.css'
import SpecializeItem from './SpecializeItem'
import SelectedItem from './SelectedItem'

export default function Specialize() {
    const itemList = require('../../../db/specialize.json')
    const [ selectedItem, setSelectedItem ] = useState(itemList[0]);

    function clickItem(item) {
        setSelectedItem(item)
    }

    function renderSpecialize() {
        return itemList.map( ele => {
            return ( 
                <SpecializeItem selectedItem={selectedItem} clickItem={clickItem} item={ele} key={ ele.title }/>
            )
        })
    }

    return (
        <article className={styles.specialize}>
            <div className={styles.header}>
                <div className={styles.title}>Specializing In 🌟</div>
            </div>
            <section className={styles.content}>
                <div className={styles.specializeList}>{renderSpecialize()}</div>
                <SelectedItem item={selectedItem}/>
            </section>
        </article>
    )
}