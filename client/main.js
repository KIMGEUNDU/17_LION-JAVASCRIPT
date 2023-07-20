// 모듈 받아오기
import { getNode, clearContents, insertLast } from './lib/index.js';

/* --------------------------- */

// [page-1]
// 1. input value 값 가져오기
// 2. 두수의 합 더하기
// 3. result 값 출력하기

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const clear = getNode('#clear');
const result = getNode('.result');
const container = getNode('.calculator');

function handleInput() {
  let firstValue = +first.value;
  let secondValue = +second.value;

  let total = firstValue + secondValue;

  clearContents(result);
  insertLast(result, total);
}

//[page-2]
//clear 버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들어주세요.

// 1. clear 버튼을 가져온다.
// 2. clear 버튼에 이벤트 핸들러를 연결한다.
// 3. firstValue값을 지운다.
// 4. lastValue값을 지운다.
// 5. result의 값을 지운다.
// 6. result에 - 값을 넣는다.

function handleClear(e) {
  e.preventDefault();
  clearContents(first);
  clearContents(second);
  result.textContent = '-';
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);

//[page-3]
//위 내용을 이벤트 위임으로 변경
//.calculator 이벤트 input
