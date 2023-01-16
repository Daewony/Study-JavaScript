'use strict';

console.log('1');
setTimeout(() => console.log('2') ,1000);

console.log('3');

// 콜백 1번 경우, 함수를 맨 위로(호이스팅)
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));


// 콜백 2번 경우, 함수를 맨 위로(호이스팅)

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'),2000);


// 연습
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = promt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                  `Hello ${userWithRole.name}, you have a ${userWithRole.role}`  
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)