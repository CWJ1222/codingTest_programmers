// 문제 설명
// 문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.

// 입출력 예
// my_string	m	c	result
// "ihrhbakrfpndopljhygc"	4	2	"happy"
// "programmers"	1	1	"programmers"

// 입출력 예 설명
// 입출력 예 #1

// 예제 1번의 my_string을 한 줄에 4 글자씩 쓰면 다음의 표와 같습니다.
// |1열|2열|3열|4열|

// |---|---|---|---|

// |i|h|r|h|

// |b|a|k|r|

// |f|p|n|d|

// |o|p|l|j|

// |h|y|g|c|

// 2열에 적힌 글자를 세로로 읽으면 happy이므로 "happy"를 return 합니다.
// 입출력 예 #2

// 예제 2번의 my_string은 m이 1이므로 세로로 "programmers"를 적는 것과 같고 따라서 1열에 적힌 글자를 세로로 읽으면 programmers입니다. 따라서 "programmers"를 return 합니다

function solution(my_string, m, c) {
  var answer = "";

  // 문자열을 한 줄에 m 글자씩 나눠서 표처럼 배열로 생성
  const rows = [];
  for (let i = 0; i < my_string.length; i += m) {
    rows.push(my_string.slice(i, i + m)); // m글자씩 자른 문자열을 배열에 추가
  }

  // c번째 열의 글자들을 세로로 읽어서 answer에 추가
  for (let row of rows) {
    if (row[c - 1] !== undefined) {
      // c-1 번째 글자가 존재하는 경우만 추가
      answer += row[c - 1];
    }
  }

  return answer;
}
