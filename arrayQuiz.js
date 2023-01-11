// Q1
{
    const fruits = ['apple','banana','orange'];
    // console.log(fruits.toString());
    console.log(fruits.join(' '));
}

// Q2
{
    const fruits = '🍎,🥝,🍌,🍒';
    console.log(fruits.split(','));
}

// Q3
{
    const arr3 = [1,2,3,4,5];
    console.log(arr3);
    console.log(arr3.reverse());
    console.log(arr3);
}
console.clear();

// Q4
{
    const arr4 = [1,2,3,4,5];
    console.log(arr4.slice(2));
    arr4.splice(0,2) /* 배열 수정됨 */
    console.log(arr4);
}


// console.clear();
// Q5
class Student {
    constructor(name,age,enrolled,score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
    console.log(students.find((student) => student.score === 90));
}
console.clear();

// Q6
{
    const arr=[];
    for (let i of students) {
        if (i.enrolled === true) {
            arr.push(i);
        }
    }
    console.log(arr);

    console.log(students.filter((student) => student.enrolled));
}

// Q7
{
    const arr=[];
    // console.log(typeof(arr));
    for (let i of students) {
        // console.log(i.score);
        arr.push(i.score);
    }
    console.log(arr);


    console.log(students.map((student) => student.score));
}
// Q8
{
    console.log(students.some((student) => student.score < 50));
    console.log(!students.every((student) => student.score >= 50));
}

// Q9
{
    let sum = 0;
    for (let i of students) {
        sum += i.score;
    }
    sum /= students.length
    // console.log(students.length);
    console.log(sum);

    // console.log(students.reduce((prev, curr) => {
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // }, 0));

    console.log((students.reduce((prev, curr) =>  prev + curr.score, 0))/students.length);
}
// Q10
{
    const arr =[];
    for (let i of students) {
        arr.push(i.score);
    }
    console.log(arr.join(', '));

    console.log(students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(', '));
}
// Bonus
{
    console.log(students
        .map((student) => student.score)
        .sort((a,b) => b - a)
        .join(', '));
}
