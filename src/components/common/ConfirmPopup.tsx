import * as React from 'react';
import styled from 'styled-components';

// 타이틀 + 내용 둘 다 있는 경우
type ConfirmPopupProps = {
    prop1: {
        value: string;
    };
    prop2: {
        value: string;
    };
};

// 내용만 있는 경우
type ConfirmPopupTextProps = {
    value: string;
};

// 타이틀 + 내용 둘 다 있는 경우
const ConfirmPopup: React.FC<ConfirmPopupProps> = ({ prop1, prop2 }) => {
    return (
        <ConfirmPopupSC>
            <div className="confirm_popup">
                <h3>{prop1.value}</h3>
                <span>{prop2.value}</span>
                <button>확인</button>
            </div>
        </ConfirmPopupSC>
    );
};
// 내용만 있는 경우
const ConfirmPopupText: React.FC<ConfirmPopupTextProps> = (props) => {
    return (
        <ConfirmPopupTextSC>
            <div className="confirm_popup">
                <span>{props.value}</span>
                <button>확인</button>
            </div>
        </ConfirmPopupTextSC>
    );
};

export default ConfirmPopup;
export { ConfirmPopupText };

const ConfirmPopupSC = styled.div`
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
        width: 130px;
        height: 40px;
        border: none;
        border-radius: 6px;
        background-color: #FFB100;
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
    }
`;
const ConfirmPopupTextSC = styled.div`
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

    h3 {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
    }

    span {
        font-size: 20px;
    }

    button {
        width: 130px;
        height: 40px;
        border: none;
        border-radius: 6px;
        background-color: #FFB100;
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
    }
`;
