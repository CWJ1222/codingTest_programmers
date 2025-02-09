// 문제 설명
// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

// 입출력 예
// my_string	s	e	result
// "Progra21Sremm3"	6	12	"ProgrammerS123"
// "Stanley1yelnatS"	4	10	"Stanley1yelnatS"

// 입출력 예 설명
// 입출력 예 #1

// 예제 1번의 my_string에서 인덱스 6부터 인덱스 12까지를 뒤집은 문자열은 "ProgrammerS123"이므로 "ProgrammerS123"를 return 합니다.
// 입출력 예 #2

// 예제 2번의 my_string에서 인덱스 4부터 인덱스 10까지를 뒤집으면 원래 문자열과 같은 "Stanley1yelnatS"이므로 "Stanley1yelnatS"를 return 합니다.

function solution(my_string, s, e) {
  // 문자열의 앞부분(0부터 s-1까지), 뒤집을 부분(s부터 e까지), 뒷부분(e+1부터 끝까지)을 처리
  const prefix = my_string.slice(0, s); // s 이전의 문자열
  const toReverse = my_string.slice(s, e + 1); // 뒤집을 부분
  const suffix = my_string.slice(e + 1); // e 이후의 문자열

  // 결과 문자열 생성
  const answer = prefix + toReverse.split("").reverse().join("") + suffix;
  return answer;
}
