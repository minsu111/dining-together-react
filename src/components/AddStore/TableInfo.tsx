import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Input from '../common/Input';
import Button from '../common/Button';
import TableTypeSelect from './TableTypeSelect';

type TableInfoProps = {
    placeName: string;
    minPeople: string;
    maxPeople: string;
    handleChangeInfo: (k: string, v: string) => void;
};

function TableInfo({
    placeName,
    minPeople,
    maxPeople,
    handleChangeInfo,
}: TableInfoProps) {
    const [mainImagePreview, setMainImagePreview] = useState<string | null>(
        null,
    );
    const mainImageInputRef = useRef<HTMLInputElement | null>(null);
    const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setMainImagePreview(event.target?.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const clearMainImage = () => {
        setMainImagePreview(null);
        if (mainImageInputRef.current) {
            mainImageInputRef.current.value = '';
        }
    };
    return (
        <section>
            <Inner>
                <FormSC>
                    <div className="content">
                        <h4>테이블 타입</h4>
                        <TableTypeSelect />
                    </div>

                    <Input
                        label="테이블 명"
                        name="placeName"
                        value={placeName}
                        inputType="text"
                        placeholder="자리 이름을 입력해주세요."
                        onChange={(e) => {
                            handleChangeInfo('placeName', e.target.value);
                        }}
                    />

                    <div className="content">
                        <h4>가게 이미지 - 대표 이미지(필수)</h4>
                        <StyledLabel htmlFor="mainPic">
                            <FontAwesomeIcon icon={faCamera} />
                            <input
                                id="mainPic"
                                type="file"
                                onChange={handleMainImageChange}
                                className="hidden"
                            />
                        </StyledLabel>

                        {mainImagePreview && (
                            <PreviewPic onClick={clearMainImage}>
                                <PreviewImage
                                    src={mainImagePreview}
                                    alt="Main Preview"
                                />
                            </PreviewPic>
                        )}
                    </div>

                    <div className="inputarea">
                        <Input
                            label="예약 가능 최소 인원"
                            name="minPeople"
                            value={minPeople}
                            inputType="number"
                            width="80px"
                            onChange={(e) => {
                                handleChangeInfo('minPeople', e.target.value);
                            }}
                        />
                        <p>명</p>
                    </div>
                    <div className="inputarea">
                        <Input
                            label="예약 가능 최대 인원"
                            name="maxPeople"
                            value={maxPeople}
                            inputType="number"
                            width="80px"
                            onChange={(e) => {
                                handleChangeInfo('maxPeople', e.target.value);
                            }}
                        />
                        <p>명</p>
                    </div>
                    <Button text='등록' onClick={()=> {}} />
                </FormSC>
            </Inner>
        </section>
    );
}

export default TableInfo;

const Inner = styled.div`
    margin: 20px auto;
    width: 350px;
    height: 790px;
    position: relative;
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

    Input {
        margin-bottom: 20px;
    }

    .inputarea {
        display: flex;
        align-items: flex-end;
    }
    
    p {
        margin-left: 0px;
        padding-bottom: 35px;
    }

    Button {
        position: absolute;
        bottom: 20px;
    }
`;

const StyledLabel = styled.label`
    width: 50px;
    height: 50px;
    border: 1.2px solid #ffb100;
    border-radius: 7px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffb100;
    cursor: pointer;
    margin-bottom: 20px;

    .hidden {
        display: none;
    }
`;

const PreviewPic = styled.div`
    width: 200px;
    margin: 20px 0;
    border: 1.4px solid #ffb100;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 7px;
    cursor: pointer;
`;

const PreviewImage = styled.img`
    min-width: 150px;
    height: 100px;
    display: inline-block;
`;
