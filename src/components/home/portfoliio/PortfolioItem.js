import styles from './PortfolioItem.module.css'
import styled from "styled-components";

const StyledImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: ${props => props.backgroundColor};
    border-radius: 10px;
`;

export default function PortfolioItem({ item }) {
    return (
        <section className={ styles.portfolioItem }>
            <StyledImageContainer backgroundColor={item.backgroundColor}>
                <img src={ `assets/${item.image}` }/>
            </StyledImageContainer>
            <div className={ styles.content }>
                <div className={ styles.header }>
                    <a className={ styles.title } href={ item.url }>{ item.title }</a>
                    <span className={ styles.title_en }>{ item.title_en }</span>
                </div>
                <div className={ styles.subtitle }>{ item.subtitle }</div>
            </div>
        </section>
    )
}