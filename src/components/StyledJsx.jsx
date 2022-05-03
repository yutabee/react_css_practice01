export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">-StyledJsx-</p>
        <button className="button">Fight!!</button>
      </div>

      {/* スタイルの中は普通のCssと同じように書ける。中身はテンプレートリテラル */}
      <style jsx="true">
        {`
          .container {
            border: solid 2px #392eff;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .title {
            margin: 0;
            color: #ed84a8;
          }
          .button {
            background-color: #abedd8;
            border: none;
            padding: 8px;
            border-radius: 8px;
          }
        `}
        {/* sassみたいな疑似要素は使えない */}
      </style>
    </>
  );
};
