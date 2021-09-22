import { Link } from 'react-router-dom'
import styles from './Portfolio.module.css'
import PortfolioItem from './PortfolioItem'

export default function Portfolio() {
    const itemList = require('../../../db/topProject.json')

    function renderPortfolio() {
        return itemList.map( ele => {
            return ( 
                <PortfolioItem item={ele} key={ ele.title }/>
            )
        })
    }

    return (
        <article className={ styles.portfolio }>
            <header className={ styles.header }>
                <div className={ styles.title }>My Portfolio</div>
                <div className={ styles.description }>
                    My projects and works. Details can be found 
                    <span className={ styles.link }>
                        <Link to="/project"> Here</Link>
                    </span>.
                </div>
            </header>
            <div className={ styles.portfolioList }>{ renderPortfolio() }</div>
        </article>
    )
}