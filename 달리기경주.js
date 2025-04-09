// 문제 설명
// 얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

// 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.
// function solution(players, callings) {
//     var answer = [];
//     return answer;
// }

// 입출력 예
// players	/callings	/result
// ["mumu", "soe", "poe", "kai", "mine"]	/["kai", "kai", "mine", "mine"]	/["mumu", "kai", "mine", "soe", "poe"]

// 입출력 예 설명
// 입출력 예 #1
// 4등인 "kai" 선수가 2번 추월하여 2등이 되고 앞서 3등, 2등인 "poe", "soe" 선수는 4등, 3등이 됩니다. 5등인 "mine" 선수가 2번 추월하여 4등, 3등인 "poe", "soe" 선수가 5등, 4등이 되고 경주가 끝납니다. 1등부터 배열에 담으면 ["mumu", "kai", "mine", "soe", "poe"]이 됩니다.

function solution(players, callings) {
  const playerMap = new Map();
  for (let i = 0; i < players.length; i++) {
    playerMap.set(players[i], i);
  }

  for (const calling of callings) {
    const index = playerMap.get(calling);
    const overtakenIndex = (index - 1 + players.length) % players.length;

    // Swap players
    [players[index], players[overtakenIndex]] = [
      players[overtakenIndex],
      players[index],
    ];

    // Update playerMap
    playerMap.set(players[index], index);
    playerMap.set(players[overtakenIndex], overtakenIndex);
  }

  return players;
}
// 테스트 1 〉	통과 (0.11ms, 33.5MB)
// 테스트 2 〉	통과 (0.13ms, 33.5MB)
// 테스트 3 〉	통과 (0.27ms, 33.5MB)
// 테스트 4 〉	통과 (0.66ms, 33.7MB)
// 테스트 5 〉	통과 (7.50ms, 38MB)
// 테스트 6 〉	통과 (10.30ms, 38.3MB)
// 테스트 7 〉	통과 (39.80ms, 42.7MB)
// 테스트 8 〉	통과 (49.22ms, 47.6MB)
// 테스트 9 〉	통과 (51.50ms, 53.3MB)
// 테스트 10 〉	통과 (140.13ms, 73.4MB)
// 테스트 11 〉	통과 (242.00ms, 86.1MB)
// 테스트 12 〉	통과 (290.61ms, 86.8MB)
// 테스트 13 〉	통과 (234.42ms, 86.8MB)
// 테스트 14 〉	통과 (0.12ms, 33.4MB)
// 테스트 15 〉	통과 (0.08ms, 33.5MB)
// 테스트 16 〉	통과 (0.08ms, 33.5MB)

///////////
function solution(players, callings) {
  const rank = new Map(); // 선수 이름 → 현재 등수(인덱스)

  // 초기 등수 맵 만들기
  players.forEach((player, index) => {
    rank.set(player, index);
  });

  // 해설진이 이름을 부를 때마다 처리
  for (let name of callings) {
    const currentIdx = rank.get(name);
    const frontIdx = currentIdx - 1;
    const frontPlayer = players[frontIdx];

    // 위치 교환
    players[frontIdx] = name;
    players[currentIdx] = frontPlayer;

    // 등수 정보 갱신
    rank.set(name, frontIdx);
    rank.set(frontPlayer, currentIdx);
  }

  return players;
}
//   테스트 1 〉	통과 (0.10ms, 33.5MB)
// 테스트 2 〉	통과 (0.09ms, 33.4MB)
// 테스트 3 〉	통과 (0.22ms, 33.6MB)
// 테스트 4 〉	통과 (0.35ms, 33.7MB)
// 테스트 5 〉	통과 (2.04ms, 34.1MB)
// 테스트 6 〉	통과 (4.17ms, 37.8MB)
// 테스트 7 〉	통과 (12.83ms, 42.3MB)
// 테스트 8 〉	통과 (18.28ms, 47.8MB)
// 테스트 9 〉	통과 (39.10ms, 53.1MB)
// 테스트 10 〉	통과 (166.91ms, 73.1MB)
// 테스트 11 〉	통과 (326.57ms, 85.4MB)
// 테스트 12 〉	통과 (290.93ms, 86.6MB)
// 테스트 13 〉	통과 (347.84ms, 86.5MB)
// 테스트 14 〉	통과 (0.10ms, 33.4MB)
// 테스트 15 〉	통과 (0.12ms, 33.4MB)
// 테스트 16 〉	통과 (0.13ms, 33.4MB)
