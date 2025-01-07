const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
map.set(4, "55");

console.log(map);

console.log("map.get('a') ~ ", map.get("a"));

console.log("map.size ~ ", map.size);

console.log("map.values ~ ", map.values());

for (const value of map.values()) {
  console.log("value of map.values ~ ", value);
}

console.log("-------------------------");

console.log("map.entries ~ ", map.entries());

for (const [key, value] of map.entries()) {
  console.log("key, value of map entries ~ ", key, value);
}
console.log("-------------------------");

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`${index} : ${fruit}`);
});
console.log("-------------------------");

const numbers = [10, 20, 30, 40, 50];
const result = numbers.find((num) => num > 30);
console.log("🚀 ~ result:", result);
console.log("-------------------------");

const every = numbers.every((num) => num > 5);
console.log("🚀 ~ every:", every);
const every1 = numbers.every((num) => num > 100);
console.log("🚀 ~ every1:", every1);
const some = numbers.some((num) => num > 45);
console.log("🚀 ~ some:", some); //하나라도 조건을 만족하는지 판별
