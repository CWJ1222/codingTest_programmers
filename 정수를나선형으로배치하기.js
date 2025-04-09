// 문제 설명
// 양의 정수 n이 매개변수로 주어집니다. n x n 배열에 1부터 (n의 제곱) 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
// function solution(n) {
//     var answer = [[]];
//     return answer;
// }

// 제한사항
// 1 ≤ n ≤ 30

// 입출력 예
// n	/result
// 4	/[[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
// 5	/[[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]

// 입출력 예 설명
// 입출력 예 #1
// 예제 1번의 n의 값은 4로 4 x 4 배열에 다음과 같이 1부터 16까지 숫자를 채울 수 있습니다.
// 행 \ 열	0	1	2	3
// 0	1	2	3	4
// 1	12	13	14	5
// 2	11	16	15	6
// 3	10	9	8	7
// 따라서 [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]를 return 합니다.

// 입출력 예 #2
// 예제 2번의 n의 값은 5로 5 x 5 배열에 다음과 같이 1부터 25까지 숫자를 채울 수 있습니다.
// 행 \ 열	0	1	2	3	4
// 0	1	2	3	4	5
// 1	16	17	18	19	6
// 2	15	24	25	20	7
// 3	14	23	22	21	8
// 4	13	12	11	10	9
// 따라서 [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]를 return 합니다.

function solution(n) {
  const answer = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));
  let num = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    // Move right
    for (let i = left; i <= right; i++) {
      answer[top][i] = num++;
    }
    top++;

    // Move down
    for (let i = top; i <= bottom; i++) {
      answer[i][right] = num++;
    }
    right--;

    // Move left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        answer[bottom][i] = num++;
      }
      bottom--;
    }

    // Move up
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        answer[i][left] = num++;
      }
      left++;
    }
  }

  return answer;
}

///////////////
function solution(n) {
  const answer = Array.from({ length: n }, () => Array(n).fill(0));
  const directions = [
    [0, 1], // → 오른쪽
    [1, 0], // ↓ 아래쪽
    [0, -1], // ← 왼쪽
    [-1, 0], // ↑ 위쪽
  ];

  let row = 0,
    col = 0,
    dir = 0,
    num = 1;

  while (num <= n * n) {
    answer[row][col] = num++;
    const [dr, dc] = directions[dir];
    const nextRow = row + dr;
    const nextCol = col + dc;

    if (
      nextRow < 0 ||
      nextRow >= n ||
      nextCol < 0 ||
      nextCol >= n ||
      answer[nextRow][nextCol] !== 0
    ) {
      dir = (dir + 1) % 4; // 방향 전환
    }

    row += directions[dir][0];
    col += directions[dir][1];
  }

  return answer;
}
