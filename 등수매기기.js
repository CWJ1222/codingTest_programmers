// 문제 설명
// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열 result 를 return하도록 solution 함수를 완성해주세요.

// function solution(score) {
//     var answer = [];
//     return answer;
// }

// 입출력 예
// score	/result
// [[80, 70], [90, 50], [40, 70], [50, 80]]	/[1, 2, 4, 3]
// 평균은 각각 75, 70, 55, 65 이므로 등수를 매겨 [1, 2, 4, 3]을 return합니다.

// [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]	/[4, 4, 6, 2, 2, 1, 7]
// 평균은 각각 75, 75, 40, 95, 95, 100, 20 이므로 [4, 4, 6, 2, 2, 1, 7] 을 return합니다.

// 제한사항
// 0 ≤ score[0], score[1] ≤ 100
// 1 ≤ score의 길이 ≤ 10
// score의 원소 길이는 2입니다.
// score는 중복된 원소를 갖지 않습니다.

function solution(score) {
  const n = score.length;
  const avg = score.map((s) => (s[0] + s[1]) / 2);
  const sortedAvg = [...avg].sort((a, b) => b - a);
  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    const rank = sortedAvg.indexOf(avg[i]) + 1;
    result[i] = rank;
  }

  return result;
}
