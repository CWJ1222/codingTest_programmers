// 문제 설명
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
// function solution(array, n) {
//     var answer = 0;
//     return answer;
// }

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ array의 원소 ≤ 100
// 1 ≤ n ≤ 100
// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

// 입출력 예
// array	/n	/result
// [3, 10, 28]	/20	/28
// [10, 11, 12]	/13	/12

// 입출력 예 설명
// 입출력 예 #1
// 3, 10, 28 중 20과 가장 가까운 수는 28입니다.

// 입출력 예 #2
// 10, 11, 12 중 13과 가장 가까운 수는 12입니다.

function solution(array, n) {
  let answer = array[0];
  let minDiff = Math.abs(array[0] - n);

  for (let i = 1; i < array.length; i++) {
    const diff = Math.abs(array[i] - n);

    if (diff < minDiff) {
      minDiff = diff;
      answer = array[i];
    } else if (diff === minDiff) {
      answer = Math.min(answer, array[i]);
    }
  }

  return answer;
}
