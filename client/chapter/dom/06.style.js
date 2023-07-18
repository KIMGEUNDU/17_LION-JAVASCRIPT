/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
const first = getNode('.first');

console.log(first.className);
// console.log((first.className = 'box'));
// console.log((first.className = 'box second'));

// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

//add
//remove
//contains
//toggle -> boolean 값을 반환

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is--active');
// first.classList.toggle('is--active');
// attr(first, 'class', ' ');
console.log(first.classList.contains('hello'));

addClass('.first', 'hello');

console.log(first.className);

/* 스타일 변경 방법 --------------------------------------------------------- */
first.style.backgroundColor = 'pink';
console.log(first.style.backgroundColor);
console.log(first.style.fontSize); //빈값이 나온다.

first.style.backgroundColor = 'orange'; // setter
// console.log( first.style.backgroundColor ); // getter

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용` getter의 역할만 한다.
console.log(getComputedStyle(first).fontSize);
console.log(getComputedStyle(first).color);
console.log(getComputedStyle(first).getPropertyValue('font-size'));



setCss('.first', 'color', 'white');
// setCss('.first', 'soda', 'white');
