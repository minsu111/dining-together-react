type Address = {
    postalCode: string;
    roadAddress: string;
    detailAddress: string;
};

type OperatingHours = {
    closedHour: string;
    openingHour: string;
    closedMinute: string;
    openingMinute: string;
};

export type StoreData = {
    storeId: number;
    userId: number;
    storeName: string;
    storeContact: string;
    address: Address;
    description: string;
    operatingHours: OperatingHours;
    closedDays: string;
    foodCategory: string;
    maxNum: number;
    cost: number;
    isParking: number;
    createdAt: string;
    modifiedAt: string;
    averageRating: number;
    reviewCount: number;
    isDeleted: number;
    location: string;
    keyword: string;
    mood: string;
    isRoom: boolean | null;
};
