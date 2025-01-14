// 문제 설명
// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

// 입출력 예
// my_string	result
// "Programmers"	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]

// 입출력 예 설명
// 입출력 예 #1

// 예제 1번의 my_string에서 'P'가 1개, 'a'가 1개, 'e'가 1개, 'g'가 1개, 'm'이 2개, 'o'가 1개, 'r'가 3개, 's'가 1개 있으므로 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]를 return 합니다.
function solution(my_string) {
  // 길이 52의 배열을 0으로 초기화 (대문자 26개 + 소문자 26개)
  var answer = Array(52).fill(0);

  // 문자열을 순회하며 알파벳의 개수 세기
  for (let char of my_string) {
    if (char >= "A" && char <= "Z") {
      // 대문자의 경우 (A는 index 0, B는 index 1, ..., Z는 index 25)
      answer[char.charCodeAt(0) - "A".charCodeAt(0)]++;
    } else if (char >= "a" && char <= "z") {
      // 소문자의 경우 (a는 index 26, b는 index 27, ..., z는 index 51)
      answer[26 + char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
  }

  return answer;
}
