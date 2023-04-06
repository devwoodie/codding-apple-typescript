
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

//함수
function handleFunction(x: number | string): void{
    if(typeof x === "number"){
        console.log(x + 3);
    }
};
handleFunction(20);

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