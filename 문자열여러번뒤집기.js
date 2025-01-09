// 문제 설명
// 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다. queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다. my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string은 영소문자로만 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000
// queries의 원소는 [s, e]의 형태로 0 ≤ s ≤ e < my_string의 길이를 만족합니다.
// 1 ≤ queries의 길이 ≤ 1,000

// 입출력 예
// my_string	queries	result
// "rermgorpsam"	[[2, 3], [0, 7], [5, 9], [6, 10]]	"programmers"

// 입출력 예 설명
// 예제 1번의 my_string은 "rermgorpsam"이고 주어진 queries를 순서대로 처리하면 다음과 같습니다.
// |queries|my_string|

// |---|---|
// ||"rermgorpsam"|
// |[2, 3]|"remrgorpsam"|
// |[0, 7]|"progrmersam"|
// |[5, 9]|"prograsremm"|
// |[6, 10]|"programmers"|

// 따라서 "programmers"를 return 합니다.

//array.slice(start, end); 원본변경되지않음
// •	start: 추출을 시작할 인덱스(포함).
// •	end (옵션): 추출을 종료할 인덱스(포함하지 않음). 생략하면 끝까지 추출.

// splice는 배열의 요소를 추가 삭제 또는 교체할 때 사용됨. 원본배열이 변경됨.
// array.splice(start, deleteCount, item1, item2, ...);
// •	start: 변경을 시작할 인덱스.
// •	deleteCount: 제거할 요소의 개수.
// •	item1, item2, ... (옵션): 삭제한 자리에 추가할 요소.

function solution(my_string, queries) {
  let strArray = my_string.split("");

  for (let [s, e] of queries) {
    const reversed = strArray.slice(s, e + 1).reverse();
    strArray.splice(s, reversed.length, ...reversed);
  }
  return strArray.join("");
}
