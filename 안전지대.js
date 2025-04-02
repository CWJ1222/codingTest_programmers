// 문제 설명
// 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// board는 n * n 배열입니다.
// 1 ≤ n ≤ 100
// 지뢰는 1로 표시되어 있습니다.
// board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.

// function solution(board) {
//     var answer = 0;
//     return answer;
// }

function solution(board) {
  const n = board.length;
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  // 위험 지역 표시용 배열 복사
  const dangerMap = board.map((row) => [...row]);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        for (let d = 0; d < 8; d++) {
          const ni = i + dx[d];
          const nj = j + dy[d];
          if (
            ni >= 0 &&
            ni < n &&
            nj >= 0 &&
            nj < n &&
            dangerMap[ni][nj] === 0
          ) {
            dangerMap[ni][nj] = -1; // 위험 지역으로 표시
          }
        }
      }
    }
  }

  // 안전한 지역 세기
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dangerMap[i][j] === 0) count++;
    }
  }

  return count;
}

////////////////////
function solution(board) {
  const n = board.length;
  let mineCount = 0;

  // 지뢰 개수 세기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        mineCount++;
      }
    }
  }

  let safeCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        let adjacentMines = 0;
        for (let x = Math.max(0, i - 1); x <= Math.min(n - 1, i + 1); x++) {
          for (let y = Math.max(0, j - 1); y <= Math.min(n - 1, j + 1); y++) {
            if (x === i && y === j) continue;
            if (board[x][y] === 1) {
              adjacentMines++;
            }
          }
        }
        if (adjacentMines === 0) {
          safeCount++;
        }
      }
    }
  }

  return safeCount;
}
