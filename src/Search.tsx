import { useState } from "react";
import { styled } from "styled-components";
import { fetchData } from "./api";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nicknameState } from "./atoms";

const SearchBar = styled.form`
  display: flex;
  margin: 2rem;
  width: 100%;
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
    setValue(event.currentTarget.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNickName(value);
    setValue("");
  };

  const [value, setValue] = useState("");
  const setNickName = useSetRecoilState(nicknameState);
  return (
    <SearchBar onSubmit={onSubmit}>
      <Input
        value={value}
        placeholder="닉네임을 입력하세요"
        onChange={onChange}
      />
      <Button>검색</Button>
    </SearchBar>
  );
}

export default Search;
