import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

type FoodData = {
    id: string;
    label: string;
};

type ParkingData = {
    id: string;
    label: string;
};

type CheckFoodTypeProps = {
    foodCategory: string;    
    handleChangeInfo: (key: string, value: string) => void;
};


const foodType: FoodData[] = [
    { id: 'food1', label: '한식' },
    { id: 'food2', label: '양식' },
    { id: 'food3', label: '중식' },
    { id: 'food4', label: '일식' },
    { id: 'food5', label: '아시아 음식' },
    { id: 'food6', label: '퓨전 음식' },
    { id: 'food7', label: '기타 세계 음식' },
];

const parkinglot: ParkingData[] = [
    { id: 'parking1', label: '가능' },
    { id: 'parking2', label: '불가능' },
];


export function CheckFoodType({ foodCategory, handleChangeInfo }: CheckFoodTypeProps) {
    const [selectedFood, setSelectedFood] = useState<string>('');


    const handleCheckboxChange = (id: string, label:string) => {
        setSelectedFood(id); // 1개만 선택하므로 배열 대신 문자열
        handleChangeInfo('foodCategory', label);
    };
    return (
        <section>
            <FormSC>
                {foodType.map((food) => (
                    <StyledLabel key={food.id} htmlFor={food.id} isChecked={selectedFood.includes(food.id)}>
                        {food.label}
                        <input
                            type="radio"
                            id={food.id}
                            name="foodType"
                            checked={selectedFood.includes(food.id)}
                            onChange={() => handleCheckboxChange(food.id, food.label)}
                        />
                    </StyledLabel>
                ))}
            </FormSC>
        </section>
    );
}


type CheckParkingProps = {
    isParking: boolean;
    handleChangeInfo: (key: string, value: boolean) => void;
};

export function CheckParking({ isParking, handleChangeInfo }: CheckParkingProps) {
    const [selectedParking, setSelectedParking] = useState<string>('');

    const handleRadioChange = (id: string) => {
        setSelectedParking(id);
        handleChangeInfo('isParking', id === 'parking1');
    };

    return (
        <section>
            <FormSC>
                {parkinglot.map((parking) => (
                    <StyledLabel key={parking.id} htmlFor={parking.id} isChecked={selectedParking === parking.id}>
                        {parking.label}
                        <input
                            type="radio"
                            id={parking.id}
                            name="parking"
                            checked={selectedParking === parking.id}
                            onChange={() => handleRadioChange(parking.id)}
                        />
                    </StyledLabel>
                ))}
            </FormSC>
        </section>
    );
}


const FormSC = styled.form`
    width: 340px;
    display: flex;
    flex-wrap: wrap;
    
`;

interface StyledLabelProps {
    isChecked: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
    padding: 10px;
    background-color: ${({ isChecked }) => (isChecked ? '#ffb100' : '#f1f1f1')};
    color: ${({ isChecked }) => (isChecked ? '#fff' : '#000')};
    font-weight: ${({ isChecked }) => (isChecked ? '600' : '500')};
    border-radius: 10px;
    cursor: pointer;
    font-size: 12px;
    margin-right: 15px;
    margin-bottom: 10px;

    input {
        display: none;
    }
`;
