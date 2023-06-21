import { ChangeEventHandler, useState } from "react";
import { styled } from "styled-components";
import { fetchData } from "./api";

const SearchBar = styled.form`
  display: flex;
  margin: 2rem;
  width: 0%;
  padding: 0 100px;
  gap: 0.5rem;
`;
const Button = styled.button`
  background-color: ${(props) => props.theme.accentColor};
  border: none;
  border-radius: 10px;
  flex: 1;
  width: 100%;
  padding: 0.4rem 0.5rem;
`;
const Input = styled.input`
  font-size: 1rem;
  color: ${(props) => props.theme.textColor};
  border-radius: 10px;
  flex: 3;
  padding: 0.5rem 1rem;
  width: 100%;
`;
function Search() {
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setNickname(event.currentTarget.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNickname("");
  };

  const [nickname, setNickname] = useState("");
  return (
    <SearchBar onSubmit={onSubmit}>
      <Input
        value={nickname}
        placeholder="닉네임을 입력하세요"
        onChange={onChange}
      />
      <Button>검색</Button>
    </SearchBar>
  );
}

export default Search;
