import styles from './Portfolio.module.css'
import PortfolioItem from './PortfolioItem'
import Link from 'next/link'

export default function Portfolio() {
    const itemList = require('../../../public/data/topProject.json')

    function renderPortfolio() {
        return itemList.map( ele => {
            return ( 
                <PortfolioItem item={ele} key={ ele.title }/>
            )
        })
    }

    return (
        <article className={ styles.portfolio }>
            <div className={ styles.header }>
                <div className={ styles.title }>My Portfolio</div>
                <div className={ styles.description }>My projects and works. Details can be found <span className={ styles.link }><Link href="/project">Here</Link></span>.</div>
            </div>
            <div className={ styles.portfolioList }>{ renderPortfolio() }</div>
        </article>
    )
}