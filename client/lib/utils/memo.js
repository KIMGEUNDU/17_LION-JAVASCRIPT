import { getNode } from '../dom/index.js';

const cache = {};

export const memo = (key, callback) => {
  if (!callback) return cache[key]; //getter, setter 구분

  if (cache[key]) {
    console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
    return cache[key];
  } // 이미 같은 key 값이 있는 경우

  cache[key] = callback();
};

// 객체를 만들어서 key:value 쌍으로 저장

memo('cube', () => getNode('#cube'));
memo('cube');

/*
function(){
return getNode('#cube')
}
*/

memo('cube', () => 123);
