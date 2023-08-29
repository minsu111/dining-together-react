import React, { useState } from 'react';
import TagButton from '../common/TagButton';

const MoodTag: React.FC = () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagClick = (tagName: string) => {
        if (selectedTags.includes(tagName)) {
            setSelectedTags(selectedTags.filter(tag => tag !== tagName));
        } else if (selectedTags.length < 3) {
            setSelectedTags([...selectedTags, tagName]);
        }
    };


    return (
        <div>
            <TagButton
                name="#조용한"
                onClick={() => handleTagClick("#조용한")}
                selectedCnt={selectedTags.length}
            />
            <TagButton
                name="#뷰맛집"
                onClick={() => handleTagClick("#뷰맛집")}
                selectedCnt={selectedTags.length}
            />
            <TagButton
                name="#모던한"
                onClick={() => handleTagClick("#모던한")}
                selectedCnt={selectedTags.length}
            />
            <TagButton
                name="#비즈니스미팅"
                onClick={() => handleTagClick("#비즈니스미팅")}
                selectedCnt={selectedTags.length}
            />
            <TagButton
                name="#트렌디한"
                onClick={() => handleTagClick("#트렌디한")}
                selectedCnt={selectedTags.length}
            />
            <TagButton
                name="#심플한"
                onClick={() => handleTagClick("#심플한")}
                selectedCnt={selectedTags.length}
            />
            <TagButton
                name="#전통적인"
                onClick={() => handleTagClick("#전통적인")}
                selectedCnt={selectedTags.length}
            />
            <TagButton
                name="#이색적인"
                onClick={() => handleTagClick("#이색적인")}
                selectedCnt={selectedTags.length}
            />
        </div>
    );
};

export default MoodTag;
