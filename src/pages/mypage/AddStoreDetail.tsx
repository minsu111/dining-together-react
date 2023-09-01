import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import TableInfo from '../../components/AddStore/PlaceInfo';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Button from '../../components/common/Button';
import axiosRequest from '../../api/api';
import HandleError from '../../api/Error';

function AddStoreDetail() {
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();
    const [placeName, setPlaceName] = useState<string>('');
    const [placeType, setPlaceType] = useState<string>('');
    const [minPeople, setMinPeople] = useState<string>('');
    const [maxPeople, setMaxPeople] = useState<string>('');
    const [placeImage, setPlaceImage] = useState<File | null>(null);

    const handleChangeInfo = (key: string, value: string) => {
        if (key === 'placeName') setPlaceName(value);
        if (key === 'placeType') setPlaceType(value);
        if (key === 'minPeople') setMinPeople(value);
        if (key === 'maxPeople') setMaxPeople(value);
    };

    const submitPlaceInfo = async () => {
        try {
            const result = await axiosRequest(
                'GET',
                '/stores/my',
                {},
                HandleError,
            );

            const placeData = {
                storeId: result.storeId,
                placeName,
                placeType,
                maxPeople,
                minPeople,
            };

            const formData = new FormData();

            formData.append('storeId', placeData.storeId);
            formData.append('placeName', placeData.placeName);
            formData.append('placeType', placeData.placeType);
            formData.append('maxPeople', placeData.maxPeople);
            formData.append('minPeople', placeData.minPeople);
            if (placeImage) formData.append('placeImage', placeImage);

            const storeFormData = async () => {
                try {
                    const jwtToken = localStorage.getItem('jwt_token');

                    const placeInfo = await axios.post(
                        'http://13.209.102.55/api/stores/places',
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${jwtToken}`,
                            },
                        },
                    );

                    if (placeInfo !== null) {
                        console.log(placeInfo);
                        navigate('/my');
                    }
                } catch (error) {
                    console.log(error);
                }
            };

            storeFormData();
        } catch (error) {
            console.error(error);
        }
    };

    if (user.userType !== '2') {
        return (
            <section>
                <Header>
                    <TopNaviBarBack pageName="단체석 등록" prevPath="/my" />
                </Header>
                <Inner>
                    <h2 className='non-approve'>비정상적인 접근입니다🙅‍♀️</h2>
                </Inner>
            </section>
        );
    }

    return (
        <section>
            <Header>
                <TopNaviBarBack pageName="단체석 등록" prevPath="/my" />
            </Header>
            <Inner>
                <FormSC>
                    <TableInfo
                        placeName={placeName}
                        placeType={placeType}
                        minPeople={minPeople}
                        maxPeople={maxPeople}
                        handleChangeInfo={handleChangeInfo}
                        setPlaceImage={setPlaceImage}
                    />
                    <Button
                        text="등록"
                        onClick={submitPlaceInfo}
                        disabled={
                            placeName === '' ||
                            placeType === '' ||
                            minPeople === '' ||
                            maxPeople === '' ||
                            placeImage === null
                        }
                    />
                </FormSC>
            </Inner>
        </section>
    );
}

export default AddStoreDetail;

const Header = styled.header`
    width: 100%;
    border-bottom: 1px solid #999;
`;

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    height: 650px;
    position: relative;

    .non-approve {
        width: 100%;
        margin-top: 100px;
        font-size: 20px;
        text-align: center;
        font-weight: 600;
    }
`;

const FormSC = styled.div`
    Button {
        margin-bottom: 20px;
    }
`;
