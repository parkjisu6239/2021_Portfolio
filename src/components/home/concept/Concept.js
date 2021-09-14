import { useState } from 'react'
import styles from './Concept.module.css'
import ConceptItem from './ConceptItem'

export default function Concept() {
    const conceptList = require('../../../db/concept.json')
    const [ selectedItem, setSelectedItem ] = useState(null);

    function clickItem(item) {
        setSelectedItem(item)
    }

    function renderConcpet() {
        return conceptList.map( ele => {
            return ( 
                <ConceptItem selectedItem={selectedItem} clickItem={clickItem} item={ele} key={ ele.title }/>
            )
        })
    }
        
    return (
        <article className={ styles.concept }>
            <div className={ styles.title }>Three words that describe myself</div>
            <div className={ styles.conceptList }>
                { renderConcpet() }
            </div>
            <div className={ styles.description }>
                <div>{ selectedItem ? selectedItem.description : 'Click card!'}</div>
            </div>
        </article>
    )
}