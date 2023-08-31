import React from 'react';
import { styled } from 'styled-components';
import Input from '../common/CustomInput';
import OpenTimeSelect from './OpenTime';
import CloseTimeSelect from './CloseTime';
import DayoffSelect from './Dayoff';

type StoreForm3rdProps = {
    openingHour: string;
    openingMinute: string;
    closingHour: string;
    closingMinute: string;
    dayoff1: string;
    dayoff2: string;
    cost: string;
    maxNum: string;
    handleChangeInfo: (k: string, v: string) => void;
};

function StoreForm3rd({
    openingHour,
    openingMinute,
    closingHour,
    closingMinute,
    dayoff1,
    dayoff2,
    cost,
    maxNum,
    handleChangeInfo,
}: StoreForm3rdProps) {
    return (
        <section>
            <Inner>
                <FormSC>
                    <div className="content">
                        <h4>영업시간</h4>
                        <div>
                            <OpenTimeSelect
                                openingHour={openingHour}
                                openingMinute={openingMinute}
                                handleChangeInfo={handleChangeInfo}
                            />
                            <CloseTimeSelect
                                closingHour={closingHour}
                                closingMinute={closingMinute}
                                handleChangeInfo={handleChangeInfo}
                            />
                        </div>
                    </div>

                    <div className="content">
                        <h4>휴무일</h4>
                        <div>
                            <DayoffSelect
                                dayoff1={dayoff1}
                                dayoff2={dayoff2}
                                handleChangeInfo={handleChangeInfo}
                            />
                        </div>
                    </div>

                    <div className="inputarea">
                        <Input
                            name="maxNum"
                            label="최대 수용 인원"
                            inputType="number"
                            value={maxNum}
                            width="80px"
                            onChange={(e) =>
                                handleChangeInfo('maxNum', e.target.value)
                            }
                        />
                        <p>명</p>
                    </div>

                    <div className="inputarea">
                        <Input
                            name="cost"
                            label="인당 가격"
                            inputType="number"
                            value={cost}
                            width="150px"
                            onChange={(e) =>
                                handleChangeInfo('cost', e.target.value)
                            }
                        />
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
        background-color: #f1f1f1;
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
