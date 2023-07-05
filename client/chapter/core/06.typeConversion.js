/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;
console.log(typeof String(YEAR)); //명시적 형 변환
console.log(typeof (YEAR + '')); //암시적 형변환 value 값 + 빈문자열

// undefined, null
let days = null;
console.log(typeof String(null)); //명시적 형 변환
console.log(typeof (null + '')); //암시적 형변환

let undef = undefined;
console.log(typeof String(undef)); //명시적 형 변환
console.log(typeof (undef + '')); //암시적 형변환

// boolean
let isClicked = true;
console.log(typeof String(isClicked)); //명시적 형 변환
console.log(typeof (isClicked + '')); //암시적 형변환

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); //명시적 형변환
console.log(+friend); //암시적 형변환

// null
let bankbook = null;
console.log(Number(bankbook)); //명시적 형변환
console.log(+bankbook); //암시적 형변환

// boolean
let cutie = false;
console.log(Number(cutie)); //명시적 형변환
console.log(+cutie); //암시적 형변환

// string
let num = '250';
console.log(Number(num)); //명시적 형변환
console.log(+num); //암시적 형변환
console.log(num * 1); //암시적 형변환
console.log(num / 1); //암시적 형변환

// numeric string
let width = '105.3px';
console.log(width);
console.log(Number(width)); //명시적 형변환
console.log(+width); //암시적 형변환

let w = window.parseFloat(width); //숫자만 해석하기
console.log(w);

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

// 명시적 형변환
console.log(Boolean(friend));
console.log(Boolean(width));
console.log(Boolean(0));
console.log(Boolean('0'));

// 암시적 형변환
console.log(!false); //true
console.log(!!false); //boolean의 암시적 형변환
console.log('암시적 형변환 : ' + !true);
