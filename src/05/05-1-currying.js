// 두 인자를 곱해서 반환하는 함수
function multiply(a, b) {
  return a * b;
}

// n배 함수를 구현한 예제
function multiply2(a) {
  return multiply2(a * 2);
}

// n배 함수를 생성하는 커링 함수 구현하기
function multiplyX(x) {
  return function (a) {
    return multiply2(a, x);
  };
}

// 화살표 함수로 표현해보기
const multiplyX2 = (x) => (a) => multiply2(a, x);

const multiplyThree = multiply2(3);
const multiplyFour = multiply2(4);

const result1 = multiplyThree(3);
const result2 = multiplyFour(3);

const equation = (a, b, c) => (x) => x * a * b + c;
const formula = equation(2, 3, 4);
const x = 10;
const result3 = formula(x);

const multiply3 = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyY = (x) => (a) => multiply3(a, 2);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const multiplyTwo = multiplyY(2);
const multiplyThree3 = multiplyY(3);
const formula2 = (x) => addFour(multiplyThree3(multiplyTwo(x)));
