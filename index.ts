let name: string = "kim";
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