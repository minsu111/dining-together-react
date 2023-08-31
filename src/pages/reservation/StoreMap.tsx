import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

type StoreMapProps = {
  address: string;
}

const StoreMap = (props:StoreMapProps) => {
  useEffect(() => {
      const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      const options = { //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      };
      
      const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(props.address, (result, status) => {

        // 정상적으로 검색이 완료됐으면 
         if (status === kakao.maps.services.Status.OK) {
    
            const coords = new kakao.maps.LatLng(Number(result[0].y), Number(result[0].x));
    
            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new kakao.maps.Marker({
                map,
                position: coords
            });
    
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } 
    });    

    },[])
  return (
      <div id="map" style={{ width: "340px", height: "200px" }} />
  );
}
export default StoreMap;