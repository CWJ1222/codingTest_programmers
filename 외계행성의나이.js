// 문제 설명
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMERS식 나이를 return하도록 solution 함수를 완성해주세요.

// 입출력 예
// age /	result
// 23 /	"cd"
// 51 /	"fb"
// 100 /	"baa"

// 입출력 예 설명
// 입출력 예 #1
// age가 23이므로 "cd"를 return합니다.

// 입출력 예 #2
// age가 51이므로 "fb"를 return합니다.

// 입출력 예 #3
// age가 100이므로 "baa"를 return합니다.

// function solution(age) {
//     var answer = '';
//     return answer;
// }

function solution(age) {
  var answer = "";
  const alphabet = "abcdefghij";

  while (age > 0) {
    const remainder = age % 10;
    answer = alphabet[remainder] + answer;
    age = Math.floor(age / 10);
  }

  return answer;
}
