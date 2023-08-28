import React, { useState } from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Input from '../common/Input';

type StoreForm4thProps = {
    description: string;
    keyword: string;
    handleChangeInfo: (k: string, v: string) => void;
};

function StoreForm4th({
    description,
    keyword,
    handleChangeInfo,
}: StoreForm4thProps) {

    return (
        <section>
            <Inner>
                <FormSC>
                    <div className="content">
                        <h4>가게 소개글</h4>
                        <div className="description">
                            <FontAwesomeIcon icon={faCircleExclamation} />
                            <span>최대 150자까지 입력 가능합니다.</span>
                        </div>
                        <textarea
                            name="description"
                            value={description}
                            maxLength={150}
                            onChange={(e) => {
                                handleChangeInfo('description', e.target.value);
                            }}
                        ></textarea>
                    </div>
                    <div className="content">
                        <h4>검색용 키워드</h4>
                        <div className="description">
                            <FontAwesomeIcon icon={faCircleExclamation} />
                            <span>최대 3개까지 입력 가능합니다.</span>
                        </div>

                        <Input
                            width='150px'
                            name="keyword1"
                            value={keyword}
                            inputType="text"
                            onChange={(e) =>
                                handleChangeInfo('keyword', e.target.value)
                            }
                        />

                    </div>
                </FormSC>
            </Inner>
        </section>
    );
}

export default StoreForm4th;

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
        font-size: 13px;
        resize: none;
    }

    button {
        margin-bottom: 10px;
    }

    .description {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        font-size: 12px;
    }

    span {
        display: block;
        margin-left: 2px;
    }
`;
