import Image from 'next/image'
import Fire from '../../../public/image/concept/Fire_perspective_matte_s.png'
import Note from '../../../public/image/concept/Notebook_perspective_matte_s.png'
import Commet from '../../../public/image/concept/Comment_perspective_matte_s.png'
import Rocket from '../../../public/image/concept/Rocket_perspective_matte_s.png'
import styles from './ConceptItem.module.css'
import classNames from 'classnames';

export default function ConceptItem({ item, clickItem, selectedItem }) {
    function renderImage(){
        if (item.image === "Fire") {
            return <Image layout="intrinsic" src={ Fire } alt="Picture of the author" />
        } else if (item.image === 'Note') {
            return <Image src={ Note } alt="Picture of the author" />
        } else if (item.image === 'Commet') {
            return <Image src={ Commet } alt="Picture of the author" />
        } else if (item.image === 'Rocket') {
            return <Image src={ Rocket } alt="Picture of the author" />
        }
    }

    return (
        <div onClick={() => clickItem(item)} className={classNames({[styles.conceptitem]: true, [styles.active]: selectedItem === item})}>
            <div className={ styles.image }>{ renderImage() }</div>
            <div>
                <div className={ styles.title }>{ item.title }</div>
                <div className={ styles.subtitle }>{ item.subtitle }</div>
            </div>
        </div> 
    )
}