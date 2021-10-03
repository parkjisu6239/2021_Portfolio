import styled from "styled-components";
import PeopleSayItem from "./peopleSayItem";

export default function PeopleSay() {
    const PeopleSayList = require('../../../db/peopleSay.json')

    function renderPeopleSayItem(){
        return PeopleSayList.map((ele, idx) => {
            return <PeopleSayItem item={ele} idx={idx} key={ele.name}/>
        })
    }

    return (
        <StyledPeopleSay>
            <StyledPeopleSayTitle>
                <h2>What my Partners are saying</h2>
            </StyledPeopleSayTitle>
            <StyledPeopleSayList cnt={PeopleSayList.length}>
                {renderPeopleSayItem()}
            </StyledPeopleSayList>
        </StyledPeopleSay>
    )
}


const StyledPeopleSay = styled.article`
    display: flex;
    gap: 20px;
`;

const StyledPeopleSayTitle = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    width: 250px;
`;

const StyledPeopleSayList = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.cnt}, 1fr);
    gap: 30px;
    overflow-x: hidden;
    width: 100%;
    padding: 20px;
`;
