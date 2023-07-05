/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log('null값');
console.log('--------------------------');
const empty = null;
console.log(empty);
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
console.log('undefined값');
console.log('--------------------------');
let unknown;
console.log(unknown);
console.log(typeof unknown);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
console.log('문자형');
console.log('--------------------------');

//문자 생성자 (Constructor)
const hi = new String('hello');
// 문자 리터럴
const double = 'hello world';
const single = 'hello';
const backtick = `hello`;
console.log(double);
console.log(hi);
console.log(typeof double);

// 4. 정수, 부동 소수점 숫자(길이 제약)
console.log('숫자형');
console.log('--------------------------');

const number = new Number(123);
console.log(typeof number);

const integer = 123;
const floatingPointNumber = 10.45;
console.log(typeof integer);
console.log(typeof floatingPointNumber);
console.log(number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log('정수형');
console.log('--------------------------');

const big = BigInt(123);
const biginteger = 123n;
console.log(biginteger);

// 6. 참(true, yes) 또는 거짓(false, no)
console.log('불린형');
console.log('--------------------------');

const bool = true;
console.log(typeof bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log('객체형');
console.log('--------------------------');
const Obj = new Object({});
const obj = {};

console.log(obj);

// 8. 고유한 식별자(unique identifier)
console.log('심볼형');
console.log('--------------------------');

const unique = Symbol('uid');
console.log(typeof unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log(typeof 3);
console.log(typeof (1 + 2));

// 언어 상, 오류
// typeof 로 null을 찍게되면 object가 나오는 건 명백한 오류이다

// Object
const user = {
  name: '김건주',
  age: '29',
  sayHi: function () {
    console.log('hello');
  },
};

console.log(user.sayHi());
console.log(Object.keys(user));

// Array
const newarray = new Array();
const arr = [10, 100, 1000, 1, 2, 3];
console.log(arr[2]);

// function
const f = new fishBread(); // 클래스

function 붕어빵틀(재료) {
  console.log(재료 + '붕어빵');
}

붕어빵틀('슈크림');

// 일반 함수
function fishBread(a) {
  console.log(a + '붕어빵');
}

붕어빵틀('팥');
// this
