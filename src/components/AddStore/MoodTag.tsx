import React from 'react';
import TagButton from '../common/CustomTagButton';

type TagProps = {
    mood: string[];
    handleChangeArrayInfo: (k: string, v: string[]) => void;
};

const MoodTag = ({ mood, handleChangeArrayInfo }: TagProps) => {
    const handleTagClick = (tagName: string) => {
        if (mood.includes(tagName)) {
            handleChangeArrayInfo(
                'mood',
                mood.filter((tag) => tag !== tagName),
            );
        } else if (mood.length < 3) {
            handleChangeArrayInfo('mood', [...mood, tagName]);
        }
    };


    return (
        <div>
            <TagButton
                name="#조용한"
                onClick={() => handleTagClick('#조용한')}
                selectedCnt={mood.length}
                isChecked={mood.includes('#조용한')}
            />
            <TagButton
                name="#뷰맛집"
                onClick={() => handleTagClick('#뷰맛집')}
                selectedCnt={mood.length}
                isChecked={mood.includes('#뷰맛집')}
            />
            <TagButton
                name="#모던한"
                onClick={() => handleTagClick('#모던한')}
                selectedCnt={mood.length}
                isChecked={mood.includes('#모던한')}
            />
            <TagButton
                name="#비즈니스미팅"
                onClick={() => handleTagClick('#비즈니스미팅')}
                selectedCnt={mood.length}
                isChecked={mood.includes('#비즈니스미팅')}
            />
            <TagButton
                name="#트렌디한"
                onClick={() => handleTagClick('#트렌디한')}
                selectedCnt={mood.length}
                isChecked={mood.includes('#트렌디한')}
            />
            <TagButton
                name="#심플한"
                onClick={() => handleTagClick('#심플한')}
                selectedCnt={mood.length}
                isChecked={mood.includes('#심플한')}
            />
            <TagButton
                name="#전통적인"
                onClick={() => handleTagClick('#전통적인')}
                selectedCnt={mood.length}
                isChecked={mood.includes('#전통적인')}
            />
            <TagButton
                name="#이색적인"
                onClick={() => handleTagClick('#이색적인')}
                selectedCnt={mood.length}
                isChecked={mood.includes('#이색적인')}
            />
        </div>
    );
};

export default MoodTag;
