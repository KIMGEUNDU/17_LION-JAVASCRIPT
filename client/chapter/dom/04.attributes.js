/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first');

console.dir(first);

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

// console.log(first.hasAttribute('title')); //있어? 없어
// console.log(first.hasAttribute('size')); //있어? 있어
// console.log(first.getAttribute('class')); //속성값을 가져와줘
// console.log(first.getAttribute('id')); //속성값을 가져와줘
// console.log(first.getAttribute('size')); //속성값을 가져와줘
// first.setAttribute('title', '메시지'); //속성값 세팅해줘
// console.log(first.setAttribute('class', 'second')); //속성값 세팅해줘
// first.removeAttribute('title'); //타이틀 속성 지워줘
// console.log(first.hasAttribute('title')); //옹키동키 지워졌어
// console.log(first.getAttribute('title'));
// console.log(first.attributes); //모든 속성과 값을 가지고 와줘

// for (let value of first.attributes) {
//   console.log(value);
// }

function getAttr(node, prop) {
  //0. 넘어온 대상이 문자인지를 체크
  //1. 체크후 element node로 변경해 줘야한다.
  if (typeof node === 'string') {
    node = getNode(node);
  }

  // let a = getNode(node);
  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  // 전달받은 prop의 타입이 string이 아니라면 Error!

  if (typeof prop !== 'string') {
    throw new TypeError(
      'setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  if (!node[prop] && prop !== 'class') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

// getAttr('.first','class')
setAttr('.first', 'animation', 'playing');

//getAttr() 과 setAttr()합치기
function attr(node, prop, value) {
  // if (!value) {
  //   return getAttr(node, prop);
  // } else {
  //   setAttr(node, prop, value);
  // }

  !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

//attr('.first, 'class) //getter
//attr('.first','class', 'value') //setter

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

// console.log(first.dataset.size);
// console.log(first.dataset.tabIndex); //getter
// console.log((first.dataset.animation = 'paused')); //setter
