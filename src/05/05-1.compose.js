// 현재는 불러오지 않았기에 오류가 발생하지만
// reduce 함수의 완성과정을 눈여겨 볼 수 있다.

[multiplyTwo, multiplyThree, multiplyFour].reduce(
  function (prevFunc, nextFunc) {
    return function (value) {
      return nextFunc(prevFunc(value));
    };
  },
  function (k) {
    return k;
  }
);
