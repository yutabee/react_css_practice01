//スッキリ書けるけれどスタイルを当てただけのものか
//機能を持ったものかわからないので気を付ける必要がある
//スタイルコンポーネントの場合は頭にSをつけるなどわかりやすくするとよい
//sassの記法をそのまま持ち込めるので良い
import styled from 'styled-components';

export const StyledComponents = () => {
  return (
    <>
      <SContainer>
        <STitle>-StyledComponents-</STitle>
        <SButton>Fight!!</SButton>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #ed84a8;
`;

const SButton = styled.button`
 background-color: #abedd8;
  border:none;
  padding:8px;
  border-radius: 8px;
&:hover {
  background-color:#46cdcf;
  color:#fff;
  cursor:pointer;
`;
