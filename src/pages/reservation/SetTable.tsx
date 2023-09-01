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
    const [placeList, setPlaceList] = useState<Record<string, any>[]>([]);
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
            <DrawerBoxTitle>단체석을 선택해주세요.</DrawerBoxTitle>
            <TableBoxGroup>
                {placeList[0] ?
                (placeList.map((table, index)=>(
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
                        <img alt="" src={`http://13.209.102.55/${table.placeImage}`}style={{width: '150px', height: '100px'}} />
                        <TableInfo>
                            <p>[{table.placeType}] {table.placeName}</p>
                            <br/>{table.minPeople} ~{table.maxPeople} 명
                        </TableInfo>
                    </TableBox>)
                )) : '예약 가능한 좌석이 없습니다.'}<br/>
                {Object.keys(placeList)[0] === 'isHoliday' && '해당 날짜는 휴무일입니다.' }
            </ TableBoxGroup>
        </>
    )
}

export default SetTable;

const TableBoxGroup = styled.div`
    width: 320px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img{
        object-fit: cover;
        border-radius: 8px;
    }
    line-height: 10px;
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

const TableInfo = styled.div`
    margin-top: 10px;

    p{
        font-weight: bold;
    }
`