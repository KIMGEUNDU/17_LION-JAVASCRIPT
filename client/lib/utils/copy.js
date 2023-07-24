export function copy(text) {
  return navigator.clipboard.writeText(text);
}

console.log(navigator.clipboard);
