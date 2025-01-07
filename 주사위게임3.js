// 문제 설명
// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
// 제한사항
// a, b, c, d는 1 이상 6 이하의 정수입니다.

// 입출력 예
// a	b	c	d	result
// 2	2	2	2	2222
// 4	1	4	4	1681

// 6	3	3	6	27
// 2	5	2	6	30
// 6	4	2	5	2

// 입출력 예 설명
// 입출력 예 #1

// 예제 1번에서 네 주사위 숫자가 모두 2로 같으므로 1111 × 2 = 2222점을 얻습니다. 따라서 2222를 return 합니다.
// 입출력 예 #2

// 예제 2번에서 세 주사위에서 나온 숫자가 4로 같고 나머지 다른 주사위에서 나온 숫자가 1이므로 (10 × 4 + 1)2 = 412 = 1681점을 얻습니다. 따라서 1681을 return 합니다.
// 입출력 예 #3

// 예제 3번에서 a, d는 6으로, b, c는 3으로 각각 같으므로 (6 + 3) × |6 - 3| = 9 × 3 = 27점을 얻습니다. 따라서 27을 return 합니다.
// 입출력 예 #4

// 예제 4번에서 두 주사위에서 2가 나오고 나머지 다른 두 주사위에서 각각 5, 6이 나왔으므로 5 × 6 = 30점을 얻습니다. 따라서 30을 return 합니다.
// 입출력 예 #5

// 예제 5번에서 네 주사위 숫자가 모두 다르고 나온 숫자 중 가장 작은 숫자가 2이므로 2점을 얻습니다. 따라서 2를 return 합니다.

// function solution(a, b, c, d) {
//   var answer = 0;
//   return answer;
// }

// 빈도 계산 함수
function countOccurrences(a, b, c, d) {
  const counts = new Map();
  [a, b, c, d].forEach((num) => {
    counts.set(num, (counts.get(num) || 0) + 1);
  });
  return counts;
}

function solution(a, b, c, d) {
  const counts = countOccurrences(a, b, c, d);

  // 조건 1
  if (counts.size === 1) {
    const p = a;
    return 1111 * p;
  }

  // 조건 2
  if ([...counts.values()].includes(3)) {
    const p = [...counts.entries()].find(([key, value]) => value === 3)[0];
    const q = [...counts.entries()].find(([key, value]) => value === 1)[0];
    return Math.pow(10 * p + q, 2);
  }

  // 조건 3
  if (counts.size === 2 && [...counts.values()].every((value) => value === 2)) {
    const [p, q] = [...counts.keys()];
    return (p + q) * Math.abs(p - q);
  }

  // 조건 4
  if (counts.size === 3) {
    const [p, q, r] = [...counts.keys()];
    const [freqP, freqQ, freqR] = [...counts.values()];
    if (freqP === 2) return q * r;
    if (freqQ === 2) return p * r;
    if (freqR === 2) return p * q;
  }

  // 조건 5
  if (counts.size === 4) {
    return Math.min(a, b, c, d);
  }

  return 0; // 기본값 (여기에 도달할 일 없음)
}
