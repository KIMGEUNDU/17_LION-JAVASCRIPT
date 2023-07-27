import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { refError } from '../error/refError.js';
import { xhr } from './xhr.js';

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

// const defaultOptions = {
//   shouldReject: false,
//   timeout: 1000,
//   data: '성공!',
//   errorMessage: '알 수 없는 오류가 발생했습니다.',
// };

export function delayP(options) {
  let config = { ...defaultOptions };

  //파라미터가 숫자만 들어왔을 때는 자동으로 timeout에 값 할당하기
  if (typeof options === 'number') {
    config.timeout = options;
  }

  if (typeof options === 'boolean') {
    config.shouldReject = options;
  }

  //파라미터가 객체로 들어왔을 때 기존의 defaultOptions의 값을 options로 병합하기
  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options };
  }

  const { shouldReject, timeout, data, errorMessage } = config;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

// delayP(false)
//   .then((res) => {
//     // console.log(res);
//   })
//   .catch(({ errorMessage = '오류경보!' }) => {
//     console.log(errorMessage);
//   });
// .finally(() => {
//   console.log('어쨌든 실행');
// });

// delayP()
//   .then(({ name, age }) => {
//     console.log(name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/* Promise API */
const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원할하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {
  // mixin

  // const config = {...defaultOptions,...options}
  // 객체 합성하기 + 구조분해할당
  const { method, url, body, errorMessage, headers } = Object.assign(
    {},
    defaultOptions,
    options
  );

  if (!url) refError('서버와 통신할 url은 필수값 입니다.');

  const xhr = new XMLHttpRequest();

  //서버 열기
  xhr.open(method, url);

  //헤더설정하기
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  //서버와 통신하기
  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

// xhrPromise({ url: 'https://jsonplaceholder.typicode.com/users' }).then(
//   (res) => {
//     res.forEach((i) => {
//       console.log(i);
//     });
//   }
// );

//get메서드 만들기
xhrPromise.get = (url) => {
  return xhrPromise({
    url,
  });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({
    method: 'POST',
    url,
    body,
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({
    method: 'DELETE',
    url,
  });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({
    method: 'PUT',
    url,
    body,
  });
};

//console.log(xhrPromise.get('https://jsonplaceholder.typicode.com/users')); //Promise{<pending>}

async function delayA() {
  return '성공';
}

const data = await delayA();

// console.log(data);

// async function 라면끓이기() {
//   const 물 = await delayP({ data: '물넣기' });
//   console.log(물);

//   const 스프 = await delayP({ data: '스프넣기' });
//   console.log(스프);

//   delayP({ data: '면넣기' }).then((res) => {
//     console.log(res);
//   });

//   const 계란 = await delayP({ data: '계란넣기' });
//   console.log(계란);

//   const 접시 = await delayP({ data: '접시담기' });
//   console.log(접시);
// }

// 라면끓이기();

async function getUserData() {
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/194');

  const pokemon = await data;
  console.log(pokemon.sprites['front_default']);

  insertLast(
    document.body,
    `<img src="${pokemon.sprites['front_default']}" alt="" />`
  );
}

// async function getUserData() {
//   const data = await xhrPromise.get(
//     'https://jsonplaceholder.typicode.com/users'
//   );

//   console.log(data);
// }

// getUserData();
