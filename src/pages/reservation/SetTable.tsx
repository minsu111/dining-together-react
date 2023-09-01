import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axiosRequest from '../../api/api';

type SetTableProps = {
    storeId: string | undefined;
    reserveValue : Record<string, any>;
    updateReserveValue: (keyToUpdate: string, value: any) => void;
    updateMaxPeople: (props:number) => void;
    updateMinPeople: (props:number) => void;
}

function SetTable(props: SetTableProps){
    interface Place {
        placeId: number;
        placeName: string;
        placeType: string;
        placeImage: string;
        maxPeople: number;
        minPeople: number;
      }

    const [placeList, setPlaceList] = useState<Place[]>([]);
    useEffect(()=>{
        const PlaceList = async () => {
            try {
                setPlaceList(await axiosRequest('GET', `/reserve/placelist?storeId=${props.storeId}&date=${props.reserveValue.reservedDate}`,{}));
            } catch (error) {
                // 여기에 에러 처리
                console.log('에러');
            }
        }
        PlaceList();
    },[props.reserveValue.visitTime])

    const [selectedTable, setSelectedTable] = useState('');
    return(
        <>
            <DrawerBoxTitle>테이블을 선택해주세요.</DrawerBoxTitle>
            <TableBoxGroup>
                {placeList[0] ? (
                placeList.map((table, index)=>(
                    <TableBox htmlFor={`table${index}`} >
                        <input 
                        type="radio" 
                        id={`table${index}`} 
                        name="table" 
                        value={table.placeId}
                        checked={selectedTable === table.placeId.toString()}
                        onChange={(event) => 
                        {
                        setSelectedTable(event.target.value);
                        props.updateReserveValue('placeId', Number(event.target.value));
                        props.updateMaxPeople(table.maxPeople);
                        props.updateMinPeople(table.minPeople);
                        }}
                        />
                        <img alt="" src={table.placeImage} style={{width: '150px', height: '100px'}} />
                        [{table.placeType}] {table.placeName}
                        <br/>{table.minPeople} ~{table.maxPeople} 명
                    </TableBox>)
                )): '예약 가능한 테이블이 없습니다.' }
            </ TableBoxGroup>
        </>
    )
}

export default SetTable;

const TableBoxGroup = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
const TableBox = styled.label`
    input {
        visibility: hidden;
    }

    : checked + img{
    border: 3px solid #FFB100;
    border-radius: 5px;
}
`
const DrawerBoxTitle = styled.h3`
    font-size: 22px;
    font-weight: bolder;
    color: #FFB100;
    margin: 50px 0 20px 0;
`