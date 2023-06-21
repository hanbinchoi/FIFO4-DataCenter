const API_KEY = "" + process.env.REACT_APP_FIFA4_API_KEY;

const requestHeader: HeadersInit = new Headers();
requestHeader.set("Authorization", API_KEY);

export function fetchData(nickname: string) {
  return fetch(
    `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${nickname}`,
    {
      headers: requestHeader,
    }
  ).then((response) => response.json());
}
