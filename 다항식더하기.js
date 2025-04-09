function solution(polynomial) {
  let terms = polynomial.split(" + ");
  let xSum = 0;
  let numSum = 0;

  for (let term of terms) {
    if (term.includes("x")) {
      // 'x'만 있는 경우는 계수가 1
      if (term === "x") {
        xSum += 1;
      } else {
        xSum += parseInt(term.replace("x", ""));
      }
    } else {
      numSum += parseInt(term);
    }
  }

  let result = [];

  if (xSum > 0) {
    result.push(xSum === 1 ? "x" : `${xSum}x`);
  }

  if (numSum > 0) {
    result.push(`${numSum}`);
  }

  return result.join(" + ");
}

// 문제 설명
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

// 입출력 예
// polynomial /	result
// "3x + 7 + x" /	"4x + 7"
// "x + x + x" /	"3x"

// 입출력 예 설명
// 입출력 예 #1
// "3x + 7 + x"에서 동류항끼리 더하면 "4x + 7"입니다.
// 입출력 예 #2
// "x + x + x"에서 동류항끼리 더하면 "3x"입니다.

// 코드
// function solution(polynomial) {
//     var answer = '';
//     return answer;
// } 완성하시오
