import React from 'react';
import { styled } from 'styled-components';

import Input from '../common/CustomInput';
import Postcode from './PostCode';
import AreaSelect from './AreaSelect';

type StoreForm1stProps = {
    storeName: string;
    storeContact: string;
    zipCode: string;
    roadAddress: string;
    detailAddress: string;
    location: string;
    handleChangeInfo: (k: string, v: string) => void;
};

function StoreForm1st({
    storeName,
    storeContact,
    zipCode,
    roadAddress,
    detailAddress,
    location,
    handleChangeInfo,
}: StoreForm1stProps) {
    return (
        <section>
            <Inner>
                <FormSC>
                    <Input
                        label="가게 상호명"
                        name="storeName"
                        inputType="text"
                        value={storeName}
                        placeholder="가게명을 입력해주세요."
                        onChange={(e) => {
                            handleChangeInfo('storeName', e.target.value);
                        }}
                    />
                    <Input
                        label="전화번호"
                        name="storeContact"
                        inputType="number"
                        value={storeContact}
                        placeholder="전화번호를 입력해주세요."
                        onChange={(e) =>
                            handleChangeInfo('storeContact', e.target.value)
                        }
                    />

                    <div>
                        <h4>가게주소</h4>
                        <Postcode
                            zipCode={zipCode}
                            roadAddress={roadAddress}
                            detailAddress={detailAddress}
                            handleChangeInfo={handleChangeInfo}
                        />
                    </div>

                    <div className="select-areat">
                        <h4>지역선택</h4>
                        <AreaSelect
                            location={location}
                            handleChangeInfo={handleChangeInfo}
                        />
                    </div>
                </FormSC>
            </Inner>
        </section>
    );
}

export default StoreForm1st;

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    height: 790px;
    position: relative;
`;

const FormSC = styled.div`
    Input {
        margin-bottom: 20px;
    }

    .select-area {
        width: 100%;
        margin: auto;
    }

    h4 {
        margin-bottom: 12px;
        font-size: 14px;
        color: #333;
    }

    div {
        margin: auto;
    }
`;
