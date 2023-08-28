import React from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Input from '../common/Input';
import OpenTimeSelect from './OpenTime';
import CloseTimeSelect from './CloseTime';
import DayoffSelect from './Dayoff';

function StoreForm3rd() {
    return (
        <section>
            <Inner>
                <FormSC>
                    <div className="content">
                        <h4>영업시간</h4>
                        <div>
                            <OpenTimeSelect />
                            <CloseTimeSelect />
                        </div>
                    </div>
                    
                    <div className="content">
                        <h4>휴무일</h4>
                        <div>
                            <DayoffSelect />
                        </div>
                    </div>
                    
                    
                    <div className="inputarea">
                        <Input label='최대 수용 인원' inputType='number' width='80px' />
                        <p>명</p>
                    </div>

                    <div className="inputarea">
                        <Input label='인당 가격' inputType='number' width='150px' />
                        <p>원</p>
                    </div>
                    
                </FormSC>

            </Inner>
        </section>
    );
}

export default StoreForm3rd;

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    height: 790px;
    position: relative;
    box-sizing: border-box;
`;

const FormSC = styled.div`
    .content {
        margin-bottom: 20px;
    }

    h4 {
        margin-bottom: 12px;
        font-size: 14px;
        color: #333;
    }
    
    textarea {
        width: 100%;
        height: 200px;
        background-color: #F1F1F1;
        border-radius: 7px;
        outline: none;
        padding: 15px 20px;
    }

    button {
        margin-bottom: 10px;
    }

    input {
        margin-bottom: 20px;
    }

    .inputarea {
        display: flex;
        align-items: flex-end;
    }
    
    p {
        margin-left: 10px;
        padding-bottom: 35px;
    }

    span {
        display: block;
        margin-left: 2px;
        font-size: 12px;
    }
`;

const ButtonSC = styled.div`
    width: 100%;
    position: absolute;
    bottom: 20px;

    display: flex;
    justify-content: space-between;
`;
