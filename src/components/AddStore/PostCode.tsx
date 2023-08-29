import React,{useState} from "react";
import { styled } from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import Modal from "react-modal";

const Postcode: React.FC = () =>{
    const [zipCode, setZipcode] = useState<string>("");
    const [roadAddress, setRoadAddress] = useState<string>("");
    const [detailAddress, setDetailAddress] = useState<string>("");    // 추가
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const completeHandler = (data:any) =>{
        setZipcode(data.zonecode);
        setRoadAddress(data.roadAddress);
        setIsOpen(false);
    }

    // 검색 클릭
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    // 상세 주소검색 event
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setDetailAddress(e.target.value);
    }

    return(
        <Addr>
            <PostcodeArea>
                <input value={zipCode} readOnly placeholder="우편번호" />
                <CodeBtn onClick={toggle}>우편번호 검색</CodeBtn>
            </PostcodeArea>
            
            <input className="addr1" value={roadAddress} readOnly placeholder="도로명 주소" />
            <br />
            <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
                <DaumPostcode onComplete={completeHandler} />
            </Modal>
            <input className="addr2" type="text" onChange={changeHandler} value={detailAddress} placeholder="상세주소"/>
        </Addr>
    );
}

export default Postcode;

const Addr = styled.div`
    input{
        width: 150px;
        padding: 15px;
        background-color: #f1f1f1;
        border-radius: 7px;
        border: none;
        outline: none;
        font-size: 14px;

        &::placeholder {
            color: #666;
        }
    }

    .addr1, .addr2 {
        width: 100%;
    }

    DaumPostcode {
        width: 100%;
    }
`;

const PostcodeArea = styled.div`
    width; 100%;
    display: flex;
`
const CodeBtn = styled.button`
    width: 150px;
    height: 50px;
    border: 1px solid #AFAEAE;
    border-radius: 7px;
    box-sizing: border-box;
    margin-left: 30px;
    font-size: 14px;
`
// Modal 스타일
const customStyles = {
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
        left: "0",
        margin: "auto",
        width: "300px",
        height: "450px",
        padding: "0",
        overflow: "hidden",
    },
};

