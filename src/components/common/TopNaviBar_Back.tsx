import React from 'react';

const TopNaviBar_Back: React.FC<{title:string}> = ({title}) => {
    const backText = "<";

    const handleButtonClick = () => {
        alert("뒤로가기 동작 추가 필요");
      };
    

    return (
        <div
          style={{
            width: 390,
            height: 50,
            // border: "1px solid black",
            display: "flex",
            alignItems: "center",
            paddingLeft: 10,
          }}>
            <button
             onClick={handleButtonClick}
             style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
            }}>
                <strong>{backText}</strong>
            </button>
            <h3>{title}</h3>
        </div>
        );
};


export default TopNaviBar_Back;