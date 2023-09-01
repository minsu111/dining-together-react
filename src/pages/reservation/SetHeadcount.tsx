import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

type SetHeadcountProps = {
    updateReserveValue: (keyToUpdate: string, value: any) => void; 
    maxPeople: number;
    minPeople: number;
}

function SetHeadcount(props: SetHeadcountProps){
    const [headcount, setHeadcount] = useState(props.minPeople);
    
    useEffect(()=>{
        props.updateReserveValue('people', headcount);
    },[headcount]) 
    
    return(
        <>
            <DrawerBoxTitle>인원 수를 선택해주세요.</DrawerBoxTitle>
            <BorderBox>
                <CountButton type="button" onClick={()=>{setHeadcount(headcount-1)}} disabled={headcount<=props.minPeople}>−</CountButton>
                <CountNum>
                    <input 
                    type="number" 
                    value={headcount} 
                    onChange={(e) => setHeadcount(Number(e.target.value))}
                    onBlur={(e)=> (Number(e.target.value)>props.maxPeople || Number(e.target.value)<props.minPeople)
                        && setHeadcount(props.minPeople)
                    }
                    />
                </CountNum>
                <CountButton type="button" onClick={()=>{setHeadcount(headcount+1)}} disabled={headcount>=props.maxPeople}>+</CountButton>
            </BorderBox>
        </>
    )
}

export default SetHeadcount;

const DrawerBoxTitle = styled.h3`
    font-size: 22px;
    font-weight: bolder;
    color: #FFB100;
    margin: 50px 0 20px 0;
`
const BorderBox = styled.div`
    width: 350px;
    height: 150px;
    border: 2px solid #D3D7DB;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const CountButton = styled.button`
    width: 30px;
    height: 30px;
    border: solid;
    border-color: ${p => p.disabled ? '#e8e8e8': '#21272A'};
    border-width: 3px; 
    border-radius: 100%;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    color: ${p => p.disabled ? '#e8e8e8': '#21272A'}
`
const CountNum = styled.span`
    color: #21272A;
    input {
        width: 100px;
        text-align: center;
        font-weight: bold;
        font-size: 50px;
    }
`
