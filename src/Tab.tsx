import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 1px solid black;
  gap: 3rem;
`;

const TabMenu = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
  background-color: #e0dddd;
  &.clicked {
    background-color: gray;
  }
`;

interface ITab {
  clickedTab: number;
  setClickedTab: React.Dispatch<React.SetStateAction<number>>;
}

function Tab({ clickedTab, setClickedTab }: ITab) {
  const toggleTab = (idx: number) => {
    setClickedTab(idx);
  };
  const tabMenu = ["매치 정보", "거래 내역", "선수 검색"];
  return (
    <Wrapper>
      {tabMenu.map((tab, idx) =>
        idx === clickedTab ? (
          <TabMenu key={idx} className="clicked" onClick={() => toggleTab(idx)}>
            {tab}
          </TabMenu>
        ) : (
          <TabMenu key={idx} onClick={() => toggleTab(idx)}>
            {tab}
          </TabMenu>
        )
      )}
    </Wrapper>
  );
}
export default Tab;
