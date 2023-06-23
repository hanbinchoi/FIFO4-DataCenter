import { styled } from "styled-components";

const TitleText = styled.div`
  width: 100%;
  text-align: center;
  border: 1px solid black;
  font-size: 2rem;
  color: ${(props) => props.theme.textColor};
`;

function Title() {
  return <TitleText>FIF4 DataCenter</TitleText>;
}

export default Title;
