import styled from "styled-components";
import styles from './PeopleSay.module.css'
import PeopleSayItem from "./peopleSayItem";
import { ImQuotesLeft } from "react-icons/im";

export default function PeopleSay() {
    const PeopleSayList = require('../../../db/peopleSay.json')
    
    function renderPeopleSayItem() {
        return PeopleSayList.map((ele, idx) => {
            return <PeopleSayItem item={ele} idx={idx} key={ele.name}/>
        })
    }

    return (
        <StyledPeopleSay>
            <StyledPeopleSayTitle>
                <ImQuotesLeft color={'#00BB7C'}/>
                <div>What my Partners are saying</div>
            </StyledPeopleSayTitle>
            <StyledPeopleSayList cnt={PeopleSayList.length} className={styles.peopleSayList}>
                {renderPeopleSayItem()}
            </StyledPeopleSayList>
        </StyledPeopleSay>
    )
}

const StyledPeopleSay = styled.article`
    display: flex;
    gap: 20px;
    @media (max-width: 844px) {
        flex-direction: column;
        gap: 5px;
    }
`;

const StyledPeopleSayTitle = styled.div`
    padding: 20px;
    width: 250px;
    font-size: 30px;
    font-weight: 900;
    @media (max-width: 844px) {
        width: 100%;
    }
`;

const StyledPeopleSayList = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.cnt}, minmax(260px, 435px));
    gap: 30px;
    width: 100%;
    padding: 20px;
`;
