import { getNode } from '../dom/getNode.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(360deg)';

//     delay(() => {
//       first.style.top = '0';
//       second.style.top = '0';
//     });
//   });
// });

//delayP 함수를 실행하면 리턴되는 값이 promise 객체이다.
function delayP() {
  return new Promise((resolve, reject) => {
    resolve('성공입니다!');
  });
}

delayP().then((res) => {
  console.log(res);
});
