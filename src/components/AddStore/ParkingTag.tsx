import React, { useState } from 'react';
import TagBtn from './TagBtn';


const ParkingTag: React.FC = () => {
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
                name="가능"
                onClick={() => handleTagClick("Tag 1")}
                checked={selectedButton === "Tag 1"}
            />
            <TagBtn
                name="불가능"
                onClick={() => handleTagClick("Tag 2")}
                checked={selectedButton === "Tag 2"}
            />
        </div>
    );
};

export default ParkingTag;
