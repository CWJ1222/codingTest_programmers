// 문제 설명
// 문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ strArr의 길이 ≤ 100,000
// 1 ≤ strArr의 원소의 길이 ≤ 30
// strArr의 원소들은 알파벳 소문자로 이루어진 문자열입니다.
// 입출력 예
// strArr	result
// ["a","bc","d","efg","hi"]	2
// 입출력 예 설명
// 입출력 예 #1

// 각 문자열들을 길이에 맞게 그룹으로 묶으면 다음과 같습니다.
// 문자열 길이	문자열 목록	개수
// 1	["a","d"]	2
// 2	["bc","hi"]	2
// 3	["efg"]	1
// 개수의 최댓값은 2이므로 2를 return 합니다.

//Map() 객체란 키값 쌍을 저장하고 관리할 수 있는 자바스크립트 내장객체입니다.
//일반 객체 {}와 비슷하지만 키의 타입을 제한하지 않고 모든 타입(객체, 배열, 함수 포함)을 키로 사용할 수 있다는 점에서 더 유연한 자료구조입니다.
// ✅ Map()의 주요 특징
// ✔ 키의 순서가 유지됨 → 입력된 순서대로 저장됨 (객체 {}는 순서를 보장하지 않음)
// ✔ 모든 데이터 타입을 키로 사용할 수 있음 → 숫자, 문자열, 객체, 함수 등
// ✔ 빠른 조회 및 삭제 가능 (O(1)) → get()과 delete()로 빠르게 접근
// ✔ 반복(iterable)이 가능함 → forEach(), for...of 사용 가능
// ✔ size 속성 제공 → 요소 개수를 map.size로 바로 확인 가능

function solution(strArr) {
  let lengthMap = new Map();

  strArr.forEach((str) => {
    let len = str.length;
    lengthMap.set(len, (lengthMap.get(len) || 0) + 1);
  });
  return Math.max(...lengthMap.values());
}
