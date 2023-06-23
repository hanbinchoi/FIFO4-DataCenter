import React, { useState } from "react";
import { createGlobalStyle, styled } from "styled-components";
import Title from "./Title";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import Search from "./Search";
import { useQuery } from "react-query";
import { fetchDivisionInfo, fetchUserId, fetchUserRank } from "./api";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { IUser, divisionState, userState } from "./atoms";
import Tab from "./Tab";
import MatchInfo from "./MatchInfo";

// 글로벌 스타일 적용 (reset CSS)
const GlobalStyle = createGlobalStyle`

@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.7/dist/web/static/pretendard-dynamic-subset.css");

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
* {
  box-sizing: border-box;
}
body {
	line-height: 1;
	font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

const Container = styled.div`
  @media (max-width: 255px) {
    display: none;
  }
  /* @media (min-width: 390px) {
    display: none;
  } */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  padding: 3rem 5rem;
  border: 1px solid blue;
  background-color: ${(props) => props.theme.bgColor};
`;

function App() {
  const [user, setUser] = useRecoilState<IUser>(userState);
  const setDivision = useSetRecoilState(divisionState);
  const [clickedTab, setClickedTab] = useState(0);
  const notFoundUser: IUser = {
    accessId: "Not Found User",
    nickname: "",
    level: 0,
    rank: undefined,
  };
  const { isLoading: userInfoLoading, data: userInfo } = useQuery(
    // dependency
    ["nickname", user.nickname],
    () => fetchUserId(user.nickname),
    {
      // 사용자가 윈도우를 다른곳을 갔다가 오면 재실행 할지 여부
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        // data.message 가 존재하면 없는 아이디
        if (data?.message) setUser(notFoundUser);
        else setUser((prev) => ({ ...prev, ...data }));
      },
    }
  );
  const { isLoading: divisionInfoLoading, data: divisionInfo } = useQuery(
    ["division"],
    fetchDivisionInfo,
    {
      // 사용자가 윈도우를 다른곳을 갔다가 오면 재실행 할지 여부
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setDivision(data);
      },
    }
  );

  const isLoading = userInfoLoading || divisionInfoLoading;
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={darkTheme}>
        <Container>
          <Title />
          <Search />
          <Tab clickedTab={clickedTab} setClickedTab={setClickedTab} />
          {isLoading ? null : userInfo?.message ? "Loading" : <MatchInfo />}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
