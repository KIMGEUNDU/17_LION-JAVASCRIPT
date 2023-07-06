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
