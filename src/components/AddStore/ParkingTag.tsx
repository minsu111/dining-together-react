import React from 'react';
import TagBtn from './TagBtn';

type TagProps = {
    isParking: string;
    handleChangeInfo: (k: string, v: string) => void;
};

const ParkingTag = ({ isParking, handleChangeInfo }: TagProps) => {
    const handleTagClick = (name: string) => {
        if (isParking === name) {
            handleChangeInfo('isParking', '');
        } else {
            handleChangeInfo('isParking', name);
        }
    };

    return (
        <div>
            <TagBtn
                name="가능"
                onClick={() => handleTagClick('1')}
                checked={isParking === '1'}
            />
            <TagBtn
                name="불가능"
                onClick={() => handleTagClick('0')}
                checked={isParking === '0'}
            />
        </div>
    );
};

export default ParkingTag;
