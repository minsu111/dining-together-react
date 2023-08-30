import React from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import FoodTypeTag from './FoodTag';
import ParkingTag from './ParkingTag';
import MoodTag from './MoodTag';

type StoreForm2ndProps = {
    foodCategory: string;
    mood: string[];
    isParking: string;
    handleChangeInfo: (k: string, v: string) => void;
    handleChangeArrayInfo: (k: string, v: string[]) => void;
};

function StoreForm2nd({
    foodCategory,
    mood,
    isParking,
    handleChangeInfo,
    handleChangeArrayInfo,
}: StoreForm2ndProps) {
    return (
        <section>
            <Inner>
                <FormSC>
                    <div className="content">
                        <h4>음식 유형</h4>
                        <FoodTypeTag
                            foodCategory={foodCategory}
                            handleChangeInfo={handleChangeInfo}
                        />
                    </div>

                    <div className="content">
                        <h4>가게 분위기</h4>
                        <div className="description">
                            <FontAwesomeIcon icon={faCircleExclamation} />
                            <span>최대 3개까지 선택 가능합니다.</span>
                        </div>
                        <MoodTag
                            mood={mood}
                            handleChangeArrayInfo={handleChangeArrayInfo}
                        />
                    </div>

                    <div className="content">
                        <h4>주차 가능 여부</h4>
                        <ParkingTag
                            isParking={isParking}
                            handleChangeInfo={handleChangeInfo}
                        />
                    </div>
                </FormSC>
            </Inner>
        </section>
    );
}

export default StoreForm2nd;

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
