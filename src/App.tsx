import React from "react";
import { createGlobalStyle, styled } from "styled-components";
import Title from "./Title";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

// 글로벌 스타일 적용 (reset CSS)
const GlobalStyle = createGlobalStyle`

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
body {
	line-height: 1;
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
  @media (min-width: 390px) {
    background-color: black;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem 100px;
  border: 1px solid blue;
  background-color: ${(props) => props.theme.bgColor};
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={darkTheme}>
        <Container>
          <Title />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
