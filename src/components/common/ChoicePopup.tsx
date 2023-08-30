import * as React from 'react';
import styled from 'styled-components';

type ChoicePopupProps = {
    title?: string;
    contents: string;
    text?: string;
    onClose: () => void;
    rightBtn?: () => void;
};

const ChoicePopup: React.FC<ChoicePopupProps> = ({
    title,
    contents,
    text,
    onClose,
    rightBtn,
}) => {
    const cancleClickBtn = () => {
        console.log('취소');
        onClose();
    };
    const confirmClickBtn = () => {
        console.log('확인');
        onClose();
    };
    return (
        <ChoicePopupSC>
            <div className="confirm_popup">
                {title && <h3>{title}</h3>}
                <span>{contents}</span>
                <div className="btn_area">
                    <button type="button" onClick={cancleClickBtn}>
                        취소
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            confirmClickBtn();
                            rightBtn?.();
                        }}
                    >
                        {text || '확인'}
                    </button>
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
        padding: 32px 0;
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
        margin: 10px 20px;
        text-align: center;
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
        background-color: #e2e2e3;
        color: #000;
        margin-right: 10px;
    }
`;
