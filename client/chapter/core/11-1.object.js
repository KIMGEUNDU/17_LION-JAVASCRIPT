/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조

let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-vlkoklv',
  name: 'ju',
  email: 'vlkoklv@naver.com',
  isSignIn: 'true',
  permission: 'paid', //free | paid(결제한 사용자)
};

console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(
  name,
  email,
  computedProp = 'phone',
  number = `010-0000-0000`
) {
  return {
    name,
    email,
    [computedProp]: number,
  };
}

const user1 = createUser('도훈', 'ehgns@naver.com');
const user2 = createUser('건주', 'vlkoklv@naver.com', 'tel', '010-0000-0000');
console.log(user1);
console.log(user2);

// 프로퍼티 포함 여부 확인
for (let key in user1) {
  if (Object.prototype.hasOwnProperty.call(user1, key)) {
    console.log(key);
  }
}

for (let key in user2) {
  if (Object.prototype.hasOwnProperty.call(user2, key)) {
    console.log(key);
  }
}

// 프로퍼티 나열
//key만 모아놓은 배열 만들어주세요. Object.keys()
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

// getProp(object)
function getProp(object) {
  if (typeof object !== 'object') {
    throw new Error('에러얌');
  }

  return Object.keys(object);
}

console.log(keyArray);
console.log(valueArray);
console.log(getProp(authUser));
// console.log(getProp('안녕'));

// 프로퍼티 제거(remove) or 삭제(delete)
// authUser.name = null;
// delete authUser.uid;

// console.log(authUser);

// 해당 객체의 값이 비워지는 함수 만들기
function removeProperty(object, key) {
  if (key === 'all') {
    for (let key of getProp(object)) {
      object[key] = null;
    }
    return object;
  }

  return (object[key] = null);
}

// removeProperty(authUser, 'all');

function deleteProperty(object, key) {
  delete object[key];
  return object;
}

console.log(deleteProperty(authUser, 'uid'));

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  return Object.keys(object).length ? true : false;
}

const b = {};

console.log(isEmptyObject(b));

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

let color = [`#ff0000`, `#2b00ff`, `#00ff2f`];

// let [red,blue,green] = color;
let [, , green] = color;

// let red = color[0];
// let blue = color[1];
// let green = color[2];

console.log(green);

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  건주: 5000,
  지연: 3000,
  주영: 500,
  선아: 700,
};

const { 건주, 지연, 주영, 선아 } = salaries;

console.log(건주);

// 실 사용 예시
function setElementCss(options) {
  const { width: w, height:h , overflow: o, color: c ,margin:m = 0} = options;

  console.log(w, c, h, m);
}

const defaults = {
  width: 100,
  height: 200,
  overflow: false,
  color: 'orange',
};

setElementCss(defaults);
