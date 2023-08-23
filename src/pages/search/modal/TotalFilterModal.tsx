import React from "react";
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from "react-modal";
import TopNaviBarReset from './TopNaviBarReset';
import FilterButtonInModal from "./FilterButtonInModal";

import { FilterType } from "./Enum";

const TotalFilterModal: React.FC<{test:string}> = ({test}) => {

    const [modalIsOpen, setIsOpen] = React.useState(true);

    return (
        <Modal 
        isOpen={modalIsOpen}
        onRequestClose={() => { setIsOpen(false); }}
        style={{
            overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
            width: '390px',
            height: '100%',
            padding: '0 10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            inset: 0,
            },
      }}>
        <TopNaviBarReset pageName='검색하기' onClickReset={()=>{}}/>
        <FilterButtonInModal filterType={FilterType.Region} selectData=''/>
        <FilterButtonInModal filterType={FilterType.FoodType} selectData='한식'/>
        <FilterButtonInModal filterType={FilterType.PricePerPerson} selectData=''/>
        <FilterButtonInModal filterType={FilterType.Atmosphere} selectData='7만원 ~ 40만원'/>
        <FilterButtonInModal filterType={FilterType.Seat} selectData='홀'/>
      </Modal>
    );
};

export default TotalFilterModal;