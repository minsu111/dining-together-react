// eslint-disable-next-line import/prefer-default-export
export enum FilterType {
    Region = '지역',
    FoodType = '음식 유형',
    PricePerPerson = '인당가격',
    Atmosphere = '분위기',
    Seat = '좌석',
}

export enum SearchModalType {
    DatetimeSelector,
    Total,
    Region,
    FoodType,
    PricePerPerson,
    Atmosphere,
    Seat,
}

export enum RegionType {
    // Seoul_Total = '서울 전체',
    Seoul_1 = '강남',
    Seoul_2 = '서초',
    Seoul_3 = '잠실/송파/강동',
    Seoul_4 = '영등포/여의도/강서',
    Seoul_5 = '건대/성수/왕십리',
    Seoul_6 = '종로/중구',
    Seoul_7 = '홍대/합정/마포',
    Seoul_8 = '용산/이태원/한남',
    Seoul_9 = '성북/노원/중랑',
    Seoul_10 = '구로/관악/동작',
}

export enum FoodType {
    Korean = '한식',
    Chinese = '중식',
    Japanese = '일식',
    Western = '양식',
    Asian = '아시아 음식',
    Fusion = '퓨전 음식',
    Etc = '기타 세계 음식',
}

export enum AtmosphereType {
    Type1 = '조용한',
    Type2 = '뷰맛집',
    Type3 = '모던한',
    Type4 = '비즈니스 미팅',
    Type5 = '트렌디한',
    Type6 = '심플한',
    Type7 = '전통적인',
    Type8 = '이색적인',
}

export enum SeatType {
    Hall = '홀',
    Room = '룸',
    Terrace = '테라스',
}

export type EnumType = FoodType | SeatType;
