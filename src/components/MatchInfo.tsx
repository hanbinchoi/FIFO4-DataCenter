import { useQuery } from "react-query";
import { styled } from "styled-components";
import { fetchUserRank } from "../api";

import { useRecoilState, useRecoilValue } from "recoil";
import { divisionState, userState } from "../atoms";

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

interface IRankData {
  matchType: number;
  division: number;
  achievementDate: string;
}

function MatchInfo() {
  // 받아올 것 - 등급 이미지, 레벨, 닉네임, 구단가치
  const [user, setUser] = useRecoilState(userState);
  const division = useRecoilValue(divisionState);
  const { isLoading, data } = useQuery(
    ["rank", user],
    () => fetchUserRank(user.accessId),
    {
      // 사용자가 윈도우를 다른곳을 갔다가 오면 재실행 할지 여부
      refetchOnWindowFocus: false,
      onSuccess: (data: IRankData[]) => {
        const rank = data.find((ele) => ele.matchType === 50)?.division;
        setUser((prev) => ({ ...prev, rank }));
      },
    }
  );
  console.log(user);
  return (
    <Wrapper>
      <Header>
        <UserInfo>
          <Box>{user.rank}</Box>
          <Box>{user.level}</Box>
          <Box>{user.nickname}</Box>
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
