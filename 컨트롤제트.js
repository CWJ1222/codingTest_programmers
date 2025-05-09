// 문제 설명
// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ s의 길이 ≤ 200
// -1,000 < s의 원소 중 숫자 < 1,000
// s는 숫자, "Z", 공백으로 이루어져 있습니다.
// s에 있는 숫자와 "Z"는 서로 공백으로 구분됩니다.
// 연속된 공백은 주어지지 않습니다.
// 0을 제외하고는 0으로 시작하는 숫자는 없습니다.
// s는 "Z"로 시작하지 않습니다.
// s의 시작과 끝에는 공백이 없습니다.
// "Z"가 연속해서 나오는 경우는 없습니다.

// 입출력 예
// s /	result
// "1 2 Z 3" /	4
// "10 20 30 40"	/100
// "10 Z 20 Z 1"/	1
// "10 Z 20 Z"	/0
// "-1 -2 -3 Z"	/-3

// 입출력 예 설명

// 입출력 예 #1
// 본문과 동일합니다.

// 입출력 예 #2
// 10 + 20 + 30 + 40 = 100을 return 합니다.

// 입출력 예 #3
// "10 Z 20 Z 1"에서 10 다음 Z, 20 다음 Z로 10, 20이 지워지고 1만 더하여 1을 return 합니다.

// 코드
// function solution(s) {
//     var answer = 0;
//     return answer;
// } 완성하시오.

function solution(s) {
  let answer = 0;
  let nums = s.split(" ");
  let prevNum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "Z") {
      answer -= prevNum;
      prevNum = 0;
    } else {
      let num = parseInt(nums[i]);
      answer += num;
      prevNum = num;
    }
  }

  return answer;
}
