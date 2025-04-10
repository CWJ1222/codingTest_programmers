// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
// function solution(my_string) {
//     var answer = '';
//     return answer;
// }

// 제한사항
// 1 ≤ my_string ≤ 110
// my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
// 대문자와 소문자를 구분합니다.
// 공백(" ")도 하나의 문자로 구분합니다.
// 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.

// 입출력 예
// my_string /	result
// "people"	/"peol"
// "We are the world" /	"We arthwold"

// 입출력 예 설명
// 입출력 예 #1
// "people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.
// 입출력 예 #2
// "We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.

function solution(my_string) {
  const seen = new Set();
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];
    if (!seen.has(char)) {
      answer += char;
      seen.add(char);
    }
  }

  return answer;
}
