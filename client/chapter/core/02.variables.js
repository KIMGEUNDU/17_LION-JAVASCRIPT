/* ------------------ */
/* Variables          */
/* ------------------ */
let admin; //undefined
let name; //undefined

// 참조에 의한 복사
name = 'Tiger';

admin = name;

name = 'beom';

const ourPlanetName = 'Earth';

const connectUserName = 'Ori';

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let calcProductPriceQuantity;

// - 구매 제품 가격의 총 합
let totalProductPrice;

// - 1년 기준 일(day)자 수
const DAYS_PER_YEAR = 365;
//1년이 365일인것은 절대 변하지 않으니까 찐상수

// - 구매 결제 여부 (결제 했어 안했어 / 있어 없어)
let isPayment = false;
let hasClassName = true;

// - 구매 결제 내역
let paymentHistory;

// - 브랜드 접두사
const brand_prefix = 'NIKE';

// - 오늘의 운세
let fortuneOfToday;

// - 상품 정보
const productInformation = 0;

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */

// redux, recoil, ajax
// panding 아무것도안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 실패

// const panding = 'api/panding'
// const loading = 'api/loading'
// const fulfilled = 'api/fulfilled'
// const rejected = 'api/rejected'
