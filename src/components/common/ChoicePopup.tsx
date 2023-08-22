import * as React from 'react';
import styled from 'styled-components';


type ChoicePopupProps = {
    title?: string;
    contents: string;
};


const ChoicePopup: React.FC<ChoicePopupProps> = ({ title, contents }) => {
    const cancleClickBtn = () => {
        console.log("취소");
    } 
    const confirmClickBtn = () => {
        console.log("확인");
    } 
    return (
        <ChoicePopupSC>
            <div className="confirm_popup">
                {title && <h3>{title}</h3>}
                <span>{contents}</span>
                <div className="btn_area">
                    <button type='button' onClick={cancleClickBtn}>취소</button>
                    <button type='button' onClick={confirmClickBtn}>확인</button>
                </div>
            </div>
        </ChoicePopupSC>
    );
};



export default ChoicePopup;

const ChoicePopupSC = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;

    .confirm_popup {
        background-color: #fff;
        width: 345px;
        height: 225px;
        border-radius: 20px;
        padding: 50px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #474747;
    }

    h3 {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
    }

    span {
        font-size: 18px;
    }

    button {
        width: 110px;
        height: 40px;
        border: none;
        border-radius: 6px;
        background-color: #ffb100;
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
    }

    button:first-child {
        background-color: #E2E2E3;
        color: #000;
        margin-right: 10px;
    }
`;

