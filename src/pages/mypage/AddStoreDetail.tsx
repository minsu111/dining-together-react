import React, { useState } from 'react';
import { styled } from 'styled-components';
import TableInfo from '../../components/AddStore/PlaceInfo';
import TopNaviBar from '../../components/common/TopNaviBar';
import Button from '../../components/common/Button';

function AddStoreDetail() {
    const [placeName, setPlaceName] = useState<string>('');
    const [placeType, setPlaceType] = useState<string>('');
    const [minPeople, setMinPeople] = useState<string>('');
    const [maxPeople, setMaxPeople] = useState<string>('');

    const handleChangeInfo = (key: string, value: string) => {
        if (key === 'placeName') setPlaceName(value);
        if (key === 'placeType') setPlaceType(value);
        if (key === 'minPeople') setMinPeople(value);
        if (key === 'maxPeople') setMaxPeople(value);
    };

    const submitPlaceInfo = () => {
        const placeData = {
            storeId: 3,
            placeName,
            placeType,
            placeImage: '사진2.jpg',
            maxPeople: Number(maxPeople),
            minPeople: Number(minPeople),
        };
        console.log(placeData);
    };

    return (
        <section>
            <Header>
                <TopNaviBar pageName="단체석 등록" />
            </Header>
            <Inner>
                <FormSC>
                    <TableInfo
                        placeName={placeName}
                        placeType={placeType}
                        minPeople={minPeople}
                        maxPeople={maxPeople}
                        handleChangeInfo={handleChangeInfo}
                    />
                    <Button text='등록' onClick={submitPlaceInfo} />
                </FormSC>
            </Inner>
        </section>
    );
}

export default AddStoreDetail;

const Header = styled.header`
    width: 100%;
    border-bottom: 1px solid #999;
    padding-left: 10px;
`;

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    height: 790px;
    position: relative;
`;

const FormSC = styled.div``;
