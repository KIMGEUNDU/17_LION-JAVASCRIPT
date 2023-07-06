/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b; //''

// 논리합(또는) 연산자
let AorB = a || b; //10

// 부정 연산자
let reverseValue = !value; //true

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
//전부 true라서 마지막께 출력된다.

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
//첫번째 true값인 [2,3].length 의 값인 2가 출력된다.

// age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.
let age = 13;

if (age >= 14 && age <= 90) {
  console.log('신청가능합니다');
} else {
  console.log('조건이 안맞습니다.');
}

//age(나이)가 14세 이상 90세 이하에 속하지 않는지를 확인하는 if문을 작성하세요.
let age2 = 100;

if (age2 < 14 || age2 > 90) {
  console.log('신청가능합니다');
} else {
  console.log('조건이 안맞습니다.');
}

// 로그인 구현하기
let Admin = prompt('비밀번호를 입력해주세요', '');
let TheMaster = 1234;

Admin == TheMaster ? console.log('환영합니다!') : console.log('취소되었습니다');
