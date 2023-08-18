import React from "react";

const TopNaviBar: React.FC<{title:string}> = ({title}) => {
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
        <h3>{title}</h3>
    </div>
    );
};


export default TopNaviBar;