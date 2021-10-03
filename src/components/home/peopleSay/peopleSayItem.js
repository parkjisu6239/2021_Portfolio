import styled from "styled-components";

export default function PeopleSayItem({item,idx}) {
    return (
        <StyledPeopleSayItem idx={idx}>
          <StyledPeopleSayHeader>
            <StyledPeopleSayImg src={ `assets/peopleSay/${item.name}.png` }/>
            <div>
              <div>{item.name}</div>
              <StyledPeopleSayPosition>{item.position}</StyledPeopleSayPosition>
            </div>
          </StyledPeopleSayHeader>
          <StyledPeopleSayContent>{item.content}</StyledPeopleSayContent>
        </StyledPeopleSayItem>
    )
}

const StyledPeopleSayItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  width: 460px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
`;

const StyledPeopleSayHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledPeopleSayPosition = styled.div`
  color: grey;
  font-size: small
`;

const StyledPeopleSayContent = styled.div`
  color: grey;
`;

const StyledPeopleSayImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;