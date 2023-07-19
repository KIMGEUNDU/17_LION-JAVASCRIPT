/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
const container = getNode('.container');

function handleDelegation(e) {
  let target = e.target;
  let li = target.closest('li');

  if (!li) return;

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  if (className === 'home') {
    console.log('홈 실행!');
  }

  // if (className === 'a') {
  //   console.log('A 버튼 클릭!');
  // }

  // if (className === 'b') {
  //   console.log('B 버튼 클릭!');
  // }

  // if (className === 'c') {
  //   console.log('C 버튼 클릭!');
  // }

  // if (className === 'd') {
  //   console.log('D 버튼 클릭!');
  // }

  // if (dataName === 'A') {
  //   console.log('A 버튼 클릭!');
  // }

  // if (dataName === 'B') {
  //   console.log('B 버튼 클릭!');
  // }

  // if (dataName === 'C') {
  //   console.log('C 버튼 클릭!');
  // }

  // if (dataName === 'D') {
  //   console.log('D 버튼 클릭!');
  // }
}

container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
