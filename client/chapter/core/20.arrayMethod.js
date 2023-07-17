/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

function nomalIsArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
  );
}

const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

arr.forEach((item, index) => {
  // console.log(item, index);
}); //forEach는 일처리만하고 끝난다. 값을 반환하지 않는다.

people.forEach((item) => {
  // console.log(item.name);
});

const span = document.querySelectorAll('span');
// console.log(span)

//이벤트 처리 할때 이방식이 더 좋은가? -> no
//이벤트 위임 event delegation이 더 좋다.
span.forEach((item) => {
  item.addEventListener('click', function () {
    // console.log(this);
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse();
// console.log(arr);

// splice
arr.splice(1, 0, 5, 13);
// console.log(arr);

//compare function
// sort

// 오름차순
arr.sort((a, b) => a - b);
// console.log(arr);

/* 새로운 배열 반환 ------------------------ */

const user = ['선범', '건주', '준석'];

// concat(배열합치기)
// let newArray = arr.concat(user);
// console.log(newArray); //[5, 10, 13, 100, 1000, 10000, '선범', '건주', '준석']

//spread
// let newArray = [...arr,...user]
// console.log(newArray);//[5, 10, 13, 100, 1000, 10000, '선범', '건주', '준석']

// slice
// const slice = arr.slice(2, 5);
// console.log(slice); //[13, 100, 1000]

// toSorted
const toSoted = arr.toSorted((a, b) => {
  return b - a;
});
console.log(toSoted); //[10000, 1000, 100, 13, 10, 5]

// toReversed
const toReversed = arr.toReversed();
console.log(toReversed);

// toSpliced
const toSpliced = arr.toSpliced(2, 0, 'javascript', 'react');
console.log(toSpliced);

// map
// const job = people.map((item, index) => {
//   return `<div>${item.profession}</div>`;
// });

// const job = people.map((item, index) => {
//   return /* html */ `
//     <div class="userCard">
//       <div class="imageField">
//         <img src="${item.imageSrc}" alt="" />
//       </div>
//       <span>이름:${item.name}</span>
//       <span>직업:${item.profession}</span>
//       <span>나이:${item.age}</span>
//     </div>
//   `;
// });

// job.forEach((item) => {
//   document.body.insertAdjacentHTML('beforeend', item);
// });

// job.forEach((item) => {
//   document.body.insertdAdjacentHTML('beforeend', item);
// });

// function render() {
//   return (
//     <div>{people.map((item, index) => `<div>${item.profession}</div>`)}</div>
//   );
// }

// console.log(job); // ['프d론트엔드 개발자', '수영선수', '물음표살인마', '래퍼', '드라마평론가']

/* 요소 포함 여부 확인 ---d------------------- */

// indexOf
arr.indexOf(10); //1

// lastIndexOf
arr.indexOf(10); //1

// includes
arr.includes(100); //true;
console.log(arr.includes(100));

/* 요소 찾기 ------------------------------ */

// find
const find = people.find((item) => {
  return item.id > 1;
}); //

console.log(find);

// findIndex

const findIndex = people.findIndex((item) => {
  return item.id === 3;
});

console.log(findIndex);
/* 요소 걸러내기 --------------------------- */

// filter
const filter = people.filter((item) => {
  return item.id > 2;
});

console.log(filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

console.log(totalAge);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
  ''
);

document.body.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

// split: 문자 -> 배열
const stringToArray = str.split(' ');

console.log(stringToArray);

// join : 배열 -> 문자
const arrayToString = str.split(' ').join('/');

console.log(arrayToString);


