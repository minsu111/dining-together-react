import React from "react";
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from "react-modal";  // 공식문서: https://reactcommunity.org/react-modal/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Calendar from "../../../components/common/Calendar";
import SolidLine from "../SolidLine";
import Input from "../../../components/common/Input";
import Button from '../../../components/common/Button';

const DatetimeSelectorModal: React.FC<{visitDate:Date, visitorCount:number}> = ({visitDate, visitorCount}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const formattedDate = Intl.DateTimeFormat("ko", { dateStyle: 'full' }).format(visitDate);

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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            inset: 0,
            },
      }}>
        <HeaderDiv>
            <FontAwesomeIcon icon={faXmark} style={{width: 30, height: 30}}/>
        </HeaderDiv>
        <Calendar/>
        <SolidLine/>
        <div style={{width:'100%', marginTop:30}}>
            <Text>{formattedDate}</Text>
        </div>
        <div style={{marginTop:30}}>
            <Input label="인원" inputType="number" placeholder={`${visitorCount}`}/>
        </div>
        <FooterDiv>
           <Button text="검색" onClick={() => {}}/>
        </FooterDiv>
            
      </Modal>
    );
};
  
export default DatetimeSelectorModal;

const HeaderDiv = styled.div`
    width: 390px;
    display: flex;
    justify-content: flex-end;
`;

const FooterDiv = styled.div`
    position: fixed;
    bottom: 20px;
`;

const Text = styled.span`
    color: #FFB100;
    margin-bottom: 20px;
`;