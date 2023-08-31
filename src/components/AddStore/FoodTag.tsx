import React from 'react';
import TagBtn from './TagBtn';

type TagProps = {
    foodCategory: string;
    handleChangeInfo: (k: string, v: string) => void;
}

const FoodTypeTag = ({foodCategory, handleChangeInfo}:TagProps) => {

    const handleTagClick = (name: string) => {
        if (foodCategory === name) {
            // 이미 선택된 버튼을 다시 클릭하면 선택 해제
            handleChangeInfo('foodCategory', '')
        } else {
            handleChangeInfo('foodCategory', name)
        }
    };

    return (
        <div>
            <TagBtn
                name="한식"
                onClick={() => handleTagClick("한식")}
                checked={foodCategory === "한식"}
            />
            <TagBtn
                name="양식"
                onClick={() => handleTagClick("양식")}
                checked={foodCategory === "양식"}
            />
            <TagBtn
                name="중식"
                onClick={() => handleTagClick("중식")}
                checked={foodCategory === "중식"}
            />
            <TagBtn
                name="일식"
                onClick={() => handleTagClick("일식")}
                checked={foodCategory === "일식"}
            />
            <TagBtn
                name="아시아 음식"
                onClick={() => handleTagClick("아시아 음식")}
                checked={foodCategory === "아시아 음식"}
            />
            <TagBtn
                name="퓨전 음식"
                onClick={() => handleTagClick("퓨전 음식")}
                checked={foodCategory === "퓨전 음식"}
            />
            <TagBtn
                name="기타 세계 음식"
                onClick={() => handleTagClick("기타 세계 음식")}
                checked={foodCategory === "기타 세계 음식"}
            />
            
        </div>
    );
};

export default FoodTypeTag;
