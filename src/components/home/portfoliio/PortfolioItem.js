// import Image from 'next/image'
import styles from './PortfolioItem.module.css'
// import narang from '../../../public/image/portfolio/narang.png'

export default function PortfolioItem({ item }) {
    // function renderImage(){
    //     if (item.image === "narang") {
    //         return <Image layout="intrinsic" src={ narang } alt="Picture of the author" />
    //     } else if (item.image === 'Note') {
    //         return <Image src={ Note } alt="Picture of the author" />
    //     } else if (item.image === 'Commet') {
    //         return <Image src={ Commet } alt="Picture of the author" />
    //     } else if (item.image === 'Rocket') {
    //         return <Image src={ Rocket } alt="Picture of the author" />
    //     }
    // }

    return (
        <section className={ styles.portfolioItem }>
            {/* <div className={ styles.image }>{ renderImage() }</div> */}
            <div className={ styles.header }>
                <span className={ styles.title }>{ item.title }</span>
                <span className={ styles.title_en }>{ item.title_en }</span>
            </div>
            <div className={ styles.subtitle }>{ item.subtitle }</div>
        </section>
    )
}