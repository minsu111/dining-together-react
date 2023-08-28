import React, { useState } from 'react';
import TagBtn from './TagBtn';


const FoodTypeTag: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    const handleTagClick = (name: string) => {
        if (selectedButton === name) {
            setSelectedButton(null); // 이미 선택된 버튼을 다시 클릭하면 선택 해제
        } else {
            setSelectedButton(name);
        }
    };

    return (
        <div>
            <TagBtn
                name="한식"
                onClick={() => handleTagClick("Tag 1")}
                checked={selectedButton === "Tag 1"}
            />
            <TagBtn
                name="양식"
                onClick={() => handleTagClick("Tag 2")}
                checked={selectedButton === "Tag 2"}
            />
            <TagBtn
                name="중식"
                onClick={() => handleTagClick("Tag 3")}
                checked={selectedButton === "Tag 3"}
            />
            <TagBtn
                name="일식"
                onClick={() => handleTagClick("Tag 4")}
                checked={selectedButton === "Tag 4"}
            />
            <TagBtn
                name="아시아 음식"
                onClick={() => handleTagClick("Tag 5")}
                checked={selectedButton === "Tag 5"}
            />
            <TagBtn
                name="퓨전 음식"
                onClick={() => handleTagClick("Tag 6")}
                checked={selectedButton === "Tag 6"}
            />
            <TagBtn
                name="기타 세계 음식"
                onClick={() => handleTagClick("Tag 7")}
                checked={selectedButton === "Tag 7"}
            />
            
        </div>
    );
};

export default FoodTypeTag;
