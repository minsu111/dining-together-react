import * as React from 'react';
import styled from 'styled-components';


type ConfirmPopupProps = {
    title?: string;
    contents: string;
};


const ConfirmPopup: React.FC<ConfirmPopupProps> = ({ title, contents }) => {
    const confirmClickBtn = () => {
        console.log("확인");
    }
    return (
        <ConfirmPopupSC>
            <div className="confirm_popup">
                {title && <h3>{title}</h3>}
                <span>{contents}</span>
                <button type='button' onClick={confirmClickBtn}>확인</button>
            </div>
        </ConfirmPopupSC>
    );
};

export default ConfirmPopup;

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
        font-size: 18px;
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
