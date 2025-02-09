// 문자열 배열 intStrs와 정수 k, s, l가 주어집니다. intStrs의 원소는 숫자로 이루어져 있습니다.

// 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다. 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.

// 입출력 예
// intStrs	k	s	l	result
// ["0123456789","9876543210","9999999999999"]	50000	5	5	[56789, 99999]

// 입출력 예 설명
// 입출력 예 #1

// idx에 따라 잘라낸 문자열과 그에 따른 ret의 변화를 표시하면 다음 표와 같습니다.
// idx	잘라낸 문자열	ret
// 0	"56789"	[56789]
// 1	"43210"	[56789]
// 2	"99999"	[56789, 99999]
// 따라서 [56789, 99999]를 return 합니다.

// parseInt는 JavaScript에서 문자열을 정수로 변환하는 데 사용하는 전역 함수입니다. 문자열에서 숫자를 추출하고, 지정된 진법(기본값은 10진수)에 따라 정수로 변환합니다.
// parseInt(string, radix);
// 매개변수
// 	1.	string:
// 	•	변환하려는 문자열. 문자열 앞뒤에 공백이 있어도 무시됩니다.
// 	•	문자열의 첫 번째 문자가 숫자가 아니면 NaN(Not-a-Number)을 반환합니다.
// 	2.	radix (옵션):
// 	•	변환에 사용할 진법(base). 2에서 36까지의 값을 지정할 수 있습니다.
// 	•	생략하면 기본값은 10진수입니다. 하지만 문자열이 0x로 시작하면 16진수로 간주됩니다.

function solution(intStrs, k, s, l) {
  var answer = [];

  intStrs.forEach((str) => {
    const part = str.slice(s, s + l);
    const num = parseInt(part, 10);
    if (num > k) {
      answer.push(num);
    }
  });
  return answer;
}
