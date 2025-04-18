// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 입출력 예
// num_list	n	result
// [4, 2, 6, 1, 7, 6]	2	[4, 6, 7]
// [4, 2, 6, 1, 7, 6]	4	[4, 7]
// 입출력 예 설명
// 입출력 예 #1

// [4, 2, 6, 1, 7, 6]에서 2개 간격으로 저장되어 있는 원소들은 [4, 6, 7]입니다.
// 입출력 예 #2

// [4, 2, 6, 1, 7, 6]에서 4개 간격으로 저장되어 있는 원소들은 [4, 7]입니다.
function solution(num_list, n) {
  var answer = [];
  // 0부터 num_list 길이까지 n 간격으로 순회
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]); // n 간격으로 원소 추가
  }
  return answer;
}

function solution(num_list, n) {
  return num_list.filter((_, index) => index % n === 0);
}
