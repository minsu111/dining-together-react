import * as React from 'react';
import styled from 'styled-components';

// 타이틀 + 내용 둘 다 있는 경우
type ChoicePopupProps = {
    prop1: {
        value: string;
    };
    prop2: {
        value: string;
    };
};

// 내용만 있는 경우
type ChoicePopupTextProps = {
    value: string;
};

// 타이틀 + 내용 둘 다 있는 경우
const ChoicePopup: React.FC<ChoicePopupProps> = ({ prop1, prop2 }) => {
    return (
        <ChoicePopupSC>
            <div className="confirm_popup">
                <h3>{prop1.value}</h3>
                <span>{prop2.value}</span>
                <div className="btn_area">
                    <button>취소</button>
                    <button>확인</button>
                </div>
            </div>
        </ChoicePopupSC>
    );
};

// 내용만 있는 경우
const ChoicePopupText: React.FC<ChoicePopupTextProps> = (props) => {
    return (
        <ChoicePopupTextSC>
            <div className="confirm_popup">
                <span>{props.value}</span>
                <div className="btn_area">
                    <button>취소</button>
                    <button>확인</button>
                </div>
            </div>
        </ChoicePopupTextSC>
    );
};

export default ChoicePopup;
export { ChoicePopupText };

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
        font-size: 20px;
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

const ChoicePopupTextSC = styled.div`
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
        padding: 60px 0 50px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #474747;
    }

    span {
        font-size: 20px;
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
