import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { FilterHeader, FilterFooter, ContentDiv } from './template/FilterModal';
import FilterButtonInModal from './FilterButtonInModal';

import { FilterType, SearchModalType } from './enum/Enum';

/**
 * 전체 필터를 확인하거나 이동할 수 있는 Modal
 */
function TotalFilter(props: {
    isOpen: boolean;
    onClose: (modalType: SearchModalType) => void;
}) {
    const handleReset = () => {
        alert('초기화 버튼 클릭시 로직 구현 필요');
    };

    const handleClose = () => {
        props.onClose(SearchModalType.Total);
    };

    const handleConfirm = () => {
        alert('적용 버튼 클릭시 로직 구현 필요');
    };

    return (
        <Modal
            isOpen={props.isOpen}
            // onRequestClose={handleClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    width: '390px',
                    height: '100%',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    inset: 0,
                    margin: '0 auto',
                },
            }}
        >
            <FilterHeader onClickReset={handleReset} title="필터" />
            <ContentDiv>
                <Div>
                    <FilterButtonInModal
                        filterType={FilterType.Region}
                        selectData=""
                    />
                    <FilterButtonInModal
                        filterType={FilterType.FoodType}
                        selectData=""
                    />
                    <FilterButtonInModal
                        filterType={FilterType.PricePerPerson}
                        selectData=""
                    />
                    <FilterButtonInModal
                        filterType={FilterType.Atmosphere}
                        selectData=""
                    />
                    <FilterButtonInModal
                        filterType={FilterType.Seat}
                        selectData=""
                    />
                </Div>
            </ContentDiv>

            <FilterFooter onClose={handleClose} onConfirm={handleConfirm} />
        </Modal>
    );
}

export default TotalFilter;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    inset: 0;
`;
