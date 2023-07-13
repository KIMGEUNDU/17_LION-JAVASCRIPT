/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[12];
console.log(extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
let slice = message.slice(1, 3); //slice(시작위치, 끝위치)
console.log(slice);

let subString = message.substring(1, 3);
console.log(subString);

let subStr = message.substr(1, 3); //제거가 될 예정인 메세지
console.log(subStr);

// 문자열 포함 여부 확인
let indexOf = message.indexOf('p');
console.log(indexOf);

let lastIndexOf = message.lastIndexOf('.');
//뒤에서부터 찾아주지만 인덱스는 앞에서부터 찾은 값을 반환한다.
console.log(lastIndexOf);

let includes = message.includes('Less');
console.log(includes);

let startsWith = message.startsWith('more');
console.log(startsWith);

let endsWith = message.endsWith('e.');
console.log(endsWith);

// 공백 잘라내기
let trimLeft = message.trimLeft(); //trimStart()로 대체
console.log(trimLeft);

let trimRight = message.trimEnd();
console.log(trimRight);
//trimEnd()로 대체

// 양옆 공백 제거
let trim = message.trim();
console.log(trim);

// 문자열 사이의 공백을 제거
// 첫번째방법
message.split(' ').join('');

// 두번째방법
console.log(message.replace(/\s*/g, ''));

// function normalText(string){
//   return string.replace(/\s*/g,'')
// }

// normalText(str)

// 텍스트 반복
let repeat = message.repeat(3);
console.log(repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log(toLowerCase);

let toUpperCase = message.toUpperCase();
console.log(toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

console.log(toCamelCase(message));
console.log(toPascalCase(message));
