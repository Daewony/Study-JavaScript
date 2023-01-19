'use strict';

// 깔끔하게 프로미스 사용 가능한 방법(상황에 맞게 활용)


function fetchUser1() {
    // 10초 대기

    return 'one';
}

const user1 = fetchUser1();
console.log(user1);

function fetchUser2() {
    return new Promise((resolve, reject) => {
        // 10초동안 네트워크 요청  
        resolve('two');
    });
}

const user2 = fetchUser2();
user2.then(console.log);
console.log(user2);


// async
async function fetchUser() {
    return ('user_name');
}
  
const user = fetchUser();
user.then(console.log)
console.log(user);

// await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    // 동시 다발 시작, 병렬 기능
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }


// function pickFruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     });
// }

pickFruits().then(console.log);

// Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
