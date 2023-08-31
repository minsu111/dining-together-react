// email 밸리데이션 정규식
export const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

// password 밸리데이션 정규식
export const passwordRegEx =
    /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

// yy-mm-dd 형식의 문자열을 Date 객체로 파싱하는 함수
export function parseDateString(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year + 2000, month - 1, day); // 년도에 2000을 더해야 2000년 이후의 년도가 됩니다.
}

// Date 객체를 yy-mm-dd 형식의 문자열로 직렬화하는 함수
export function serializeDate(date: Date): string {
    const year = date.getFullYear() - 2000;
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year.toString().padStart(2, '0')}-${month
        .toString()
        .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}
