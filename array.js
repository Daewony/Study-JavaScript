// 동일한 타입을 묶는 것: 자료구조
// 검색, 정렬, 삽입, 삭제 효율성
'use strict';

// 배열 선언
const arr1 = new Array();
const arr2 = [1,2];

// 배열 = 인덱스의 활용을 잘하는가?(삽입, 삭제 등)

const fruits = ['🍌','🍎'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));
console.clear();

for (let i =0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

for (let yummy of fruits) {
    console.log(yummy);
}

fruits.forEach((fruit) => console.log(fruit));

// push, 맨 뒤 추가
// pop, 맨 뒤 삭제
fruits.push('🍉','🥑');
console.log(fruits);
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift, 맨 앞에 추가(대신 pop, push보다 정말 느림 -> 기존 데이터의 움직여야하므로)
// shift, 맨 앞에 삭제

fruits.unshift('🍉','🥑','🥝');
console.log(fruits);

fruits.shift();
console.log(fruits);


fruits.push('🍒');
console.log(fruits);
// 중간 삭제, 인덱스 활용
fruits.splice(2,2,'🍇','🍍');
console.log(fruits);

// 배열 붙이기
const fruits2 = ['🍓','🍑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 배열 검색
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍑'));
console.log(fruits.indexOf('🥑'));
console.log(fruits.includes('🍑'));
console.log(fruits.includes('🥑'));

console.clear();
fruits.push('🥑');
console.log(fruits);
console.log(fruits.indexOf('🥑'));
console.log(fruits.lastIndexOf('🥑'));