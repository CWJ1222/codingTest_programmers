// 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며,
// control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// -100,000 ≤ n ≤ 100,000
// 1 ≤ control의 길이 ≤ 100,000
// control은 알파벳 소문자 "w", "a", "s", "d"로 이루어진 문자열입니다.

// 입출력 예
// n	control	result
// 0	"wsdawsdassw"	-1

// 입출력 예 설명
// 입출력 예 #1

// 수 n은 control에 따라 다음과 같은 순서로 변하게 됩니다.
// 0 → 1 → 0 → 10 → 0 → 1 → 0 → 10 → 0 → -1 → -2 → -1
// 따라서 -1을 return 합니다.

//문자열을 배열로 바꾸는 방법

function solution(n, control) {
  var answer = 0;
  arrw = control.split("").filter((cha) => cha === "w");
  arra = control.split("").filter((cha) => cha === "a");
  arrd = control.split("").filter((cha) => cha === "d");
  arrs = control.split("").filter((cha) => cha === "s");

  const n1 = arrw.length - arrs.length;
  const n2 = 10 * (arrd.length - arra.length);
  return (answer = n + n1 + n2);
}

function solution(n, control) {
  let answer = n;
  for (let cha of control) {
    switch (cha) {
      case "w":
        answer += 1;
        break;
      case "s":
        answer -= 1;
        break;
      case "d":
        answer += 10;
        break;
      case "a":
        answer -= 10;
        break;
    }
  }
  return answer;
}
