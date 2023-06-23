import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  margin-top: 3rem;
`;

const Header = styled.div`
  width: 100%;
  border: 1px soild black;
  display: flex;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const RankInfo = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;
const Box = styled.div`
  background-color: tomato;
  width: 50px;
  height: 50px;
`;
function MatchInfo() {
  return (
    <Wrapper>
      <Header>
        <UserInfo>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </UserInfo>
        <RankInfo>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </RankInfo>
      </Header>
    </Wrapper>
  );
}

export default MatchInfo;
