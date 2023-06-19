import { styled } from "styled-components";

const TitleText = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.textColor};
`;

function Title() {
  return <TitleText>hello</TitleText>;
}

export default Title;
