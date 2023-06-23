const API_KEY = "" + process.env.REACT_APP_FIFA4_API_KEY;

// request header
const requestHeader: HeadersInit = new Headers();
requestHeader.set("Authorization", API_KEY);

/* 메타 데이터 */
// App - > 공식경기 ID와 이름 받아오는 fetch
export function fetchDivisionInfo() {
  return fetch(
    `https://static.api.nexon.co.kr/fifaonline4/latest/division.json`,
    {
      headers: requestHeader,
    }
  ).then((response) => response.json());
}

// 닉네임으로 userid 받아오는 fetch
export function fetchUserId(nickname: string) {
  return fetch(
    `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${nickname}`,
    {
      headers: requestHeader,
    }
  ).then((response) => response.json());
}

// userId로 닉네임,레벨 받아오는 fetch
export function fetchUserInfo(userId: string) {
  return fetch(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${userId}`, {
    headers: requestHeader,
  }).then((response) => response.json());
}

// userId로 유저 등급
export function fetchUserRank(userId: string) {
  return fetch(
    `https://api.nexon.co.kr/fifaonline4/v1.0/users/${userId}/maxdivision`,
    {
      headers: requestHeader,
    }
  ).then((response) => response.json());
}
