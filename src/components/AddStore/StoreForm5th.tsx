import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCamera,
    faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

type StoreForm5thProps = {
    setStoreImageMain: (value: File | null) => void;
    setStoreImageSub1: (value: File | null) => void;
    setStoreImageSub2: (value: File | null) => void;
};

function StoreForm5th({
    setStoreImageMain,
    setStoreImageSub1,
    setStoreImageSub2,
}: StoreForm5thProps) {
    /* 이미지 미리보기 */
    const [mainImagePreview, setMainImagePreview] = useState<string | null>(
        null,
    );
    const [subImage1Preview, setSubImage1Preview] = useState<string | null>(
        null,
    );
    const [subImage2Preview, setSubImage2Preview] = useState<string | null>(
        null,
    );

    const mainImageInputRef = useRef<HTMLInputElement | null>(null);
    const subImage1InputRef = useRef<HTMLInputElement | null>(null);
    const subImage2InputRef = useRef<HTMLInputElement | null>(null);

    const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setStoreImageMain(selectedFile);
            const reader = new FileReader();
            reader.onload = (event) => {
                setMainImagePreview(event.target?.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleSubImage1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setStoreImageSub1(selectedFile);
            const reader = new FileReader();
            reader.onload = (event) => {
                setSubImage1Preview(event.target?.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleSubImage2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setStoreImageSub2(selectedFile);
            const reader = new FileReader();
            reader.onload = (event) => {
                setSubImage2Preview(event.target?.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    /* 이미지 업로드 취소 */
    const clearMainImage = () => {
        setMainImagePreview(null);
        setStoreImageMain(null);
        if (mainImageInputRef.current) {
            mainImageInputRef.current.value = '';
        }
    };

    const clearSubImage1 = () => {
        setSubImage1Preview(null);
        setStoreImageSub1(null);
        if (subImage1InputRef.current) {
            subImage1InputRef.current.value = '';
        }
    };

    const clearSubImage2 = () => {
        setSubImage2Preview(null);
        setStoreImageSub2(null);
        if (subImage2InputRef.current) {
            subImage2InputRef.current.value = '';
        }
    };

    return (
        <section>
            <Inner>
                <FormSC>
                    <div className="content">
                        <h4>가게 이미지 - 대표 이미지(필수)</h4>
                        <StyledLabel htmlFor="mainPic">
                            <FontAwesomeIcon icon={faCamera} />
                            <input
                                id="mainPic"
                                type="file"
                                onChange={(e) => {
                                    handleMainImageChange(e);
                                }}
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

                    <div className="content">
                        <h4>가게 이미지 - 상세 이미지(선택)</h4>
                        <div className="description">
                            <FontAwesomeIcon icon={faCircleExclamation} />
                            <span>선택사항입니다 (최대 2장까지 첨부가능)</span>
                        </div>
                        <div className="sub-pic">
                            <div className="sub-pic-pre">
                                <StyledLabel htmlFor="subPic">
                                    <FontAwesomeIcon icon={faCamera} />
                                    <input
                                        id="subPic"
                                        type="file"
                                        onChange={(e) => {
                                            handleSubImage1Change(e);
                                        }}
                                    />
                                </StyledLabel>
                                {subImage1Preview && (
                                    <PreviewMinPic onClick={clearSubImage1}>
                                        {' '}
                                        <PreviewMinImage
                                            src={subImage1Preview}
                                            alt="Sub Preview"
                                        />{' '}
                                    </PreviewMinPic>
                                )}
                            </div>
                            <div className="sub-pic-pre">
                                <StyledLabel htmlFor="subPic2">
                                    <FontAwesomeIcon icon={faCamera} />
                                    <input
                                        id="subPic2"
                                        type="file"
                                        onChange={(e) => {
                                            handleSubImage2Change(e);
                                        }}
                                    />
                                </StyledLabel>
                                {subImage2Preview && (
                                    <PreviewMinPic onClick={clearSubImage2}>
                                        {' '}
                                        <PreviewMinImage
                                            src={subImage2Preview}
                                            alt="Sub Preview"
                                        />{' '}
                                    </PreviewMinPic>
                                )}
                            </div>
                        </div>
                    </div>
                </FormSC>
            </Inner>
        </section>
    );
}

export default StoreForm5th;

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    height: 790px;
`;

const FormSC = styled.div`
    .content {
        width: 350px;
        margin-bottom: 20px;
    }

    h4 {
        margin-bottom: 12px;
        font-size: 14px;
        color: #333;
    }

    input {
        width: 100px;
        height: 50px;
        background-color: #fff;
        border-color: #afaeae;
        display: none;
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

    .sub-pic {
        display: flex;
        justify-content: space-between;
    }

    .sub-pic-pre {
        width: 160px;
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

const PreviewMinPic = styled.div`
    width: 150px;
    margin: 20px 0;
    border: 1.4px solid #ffb100;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 7px;
    cursor: pointer;
`;

const PreviewMinImage = styled.img`
    min-width: 120px;
    height: 80px;
    display: inline-block;
`;
