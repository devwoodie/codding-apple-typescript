
let names: string = "kim";
let wow: number = 123;
let members: string[] = ['kim', 'park'];
let objects: {member1: string, member2: string} = {member1: 'kim', member2: 'park'};

const myName: string = "dw";
const myAge: number = 29;
const myArea: string = "gunpo";

const favorite:{singer: string, song: string} = {
    singer: "singer",
    song: "song1"
};

//타입 지정
let project:{member: string[], days: number, started: boolean} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
};

//union type
let member: (number | string) = '123';
let memberList: (number | string)[] = [1,'2',3];
let object: {a : string | number} = {a : 123};
let apple: any;
let codding: unknown;

let user: string = 'kim';
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {score: (number | boolean)[], teacher: string, friend: string | string[]} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
};
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher];

//함수 narrowing&assertion
function handleFunction(x: number | string): void{
    let array: number[] = [];
    if(typeof x === "number"){ //Narrowing
        array[0] = x;
    };
    array[1] = x as number; //Assertion
};
// assetion 문법 용도
// 1. Narrowing 할 때 씀
// 2. 무슨 타입이 들어올지 100% 확실할 때 씀

handleFunction(20);

// 연습
function helloName(name?: string){
    if(name){
        console.log(`안녕하세요 ${name}`);
    }else{
        console.log(`이름이 없습니다.`);
    };
};
helloName('홍길동');

function countLength(word: string | number){
    return word.toString().length;
};
countLength(333);

function handleMarry(pay: number, home: boolean, attr: string): string|void{
    let score: number = 0;

    if(home){
        score += 500;
    };
    if(attr === "상"){
        score += 100;
    };
    if(score >= 600){
        return "결혼 가능";
    };
};
handleMarry(100, true, "상");

// 연습
function cleanFunction(arr: (number | string)[]){
    let compClean: number[] = [];

    arr.forEach((num) => {
        if(typeof num === "string"){
            compClean.push(Number(num));
        }else{
            compClean.push(num);
        }
    });

    return compClean;
};
console.log(cleanFunction(["1",2,"3"]));

// ---
let 철수쌤 = { subject : 'math' };
let 영희쌤 = { subject : ['science', 'english'] };
let 민수쌤 = { subject : ['science', 'art', 'korean'] };
function subjectFunction(x:{subject: string | string[]}){
    if(typeof x.subject === "string"){
        return x.subject;
    }else if(Array.isArray(x.subject)){
        return x.subject[x.subject.length - 1];
    }else{
        return "empty";
    };
};
console.log(subjectFunction({subject : ['science', 'english']}));

// 타입 변수에 담아 사용하기
// type 변수
type Animal =  string | number | undefined;
type AnimalType = {name: string, age: number};
let animal: AnimalType = {name: "kim", age: 234};

// const 변수
type Girlfriend = {
    readonly name: string
    age?: number
};

const girl: Girlfriend = {
    name : 'aa'
};
// girl.name = "bb"

// type 합치기
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY; // { x: number, y: number }

let position: NewType = {x: 10, y: 20};

// 연습
type Position1 = { x: number, y: number };
type Position2 = { y: number };
type NewType1 = Position1 & Position2; // { x: number, y: number }
let position1: NewType1 = {x: 10, y: 20};

//---
type ObjectType = {color ?: string, size: number, readonly position: number[]};

//---
type Validation = {
    name: string,
    phone: number,
    email?: string
}

//---
type Adult = {adult: boolean};
type NewValidation = Validation & Adult;

let userINfo:NewValidation = {
    name : 'kim',
    adult : false,
    phone : 1234
}






