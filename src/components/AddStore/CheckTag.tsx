import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

type CheckboxData = {
    id: string;
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const checkboxes: CheckboxData[] = [
    { id: 'checkbox1', label: '#조용한' },
    { id: 'checkbox2', label: '#뷰맛집' },
    { id: 'checkbox3', label: '#모던한' },
    { id: 'checkbox4', label: '#비즈니스미팅' },
    { id: 'checkbox5', label: '#트렌디한' },
    { id: 'checkbox6', label: '#심플한' },
    { id: 'checkbox7', label: '#전통적인' },
    { id: 'checkbox8', label: '#이색적인' },
];

function CheckStoreMood({ handleChangeName }: { handleChangeName: (key: string, value: string) => void }) {
    const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

    const handleCheckboxChange = (id: string) => {
        if (countSelectedMoods() >= 3 && !selectedMoods.includes(id)) {
            return; // 이미 3개 선택되었으면 추가 선택 방지
        }

        
        setSelectedMoods(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            }
            return [...prev, id];
        });
    };
    const countSelectedMoods = () => {
        return selectedMoods.length;
    };

    useEffect(() => {
        handleChangeName('storeMood', selectedMoods.join(', ')); // 선택된 분위기를 문자열로 저장
    }, [selectedMoods, handleChangeName]);
    
    return (
        <section>
            <FormSC>
                {checkboxes.map((checkbox) => (
                    <StyledLabel key={checkbox.id} htmlFor={checkbox.id} isChecked={selectedMoods.includes(checkbox.id)}>
                        {checkbox.label}
                        <input
                            type="checkbox"
                            id={checkbox.id}
                            checked={selectedMoods.includes(checkbox.id)}
                            onChange={() => handleCheckboxChange(checkbox.id)}
                        />
                    </StyledLabel>
                ))}
            </FormSC>
        </section>
    );
}

export default CheckStoreMood;

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
