import {Friend, Colleague, ColleagueHistory } from './myTypes'


const friend1: Friend = {
  name: "I",
  phone: "087-12345",
  age: 25,
};

const friend2: Friend = {
  name: "Have",
  phone: "086--12345",
  age: 31,
};

const friends: Friend[] = [friend1, friend2];
 //console.log(friends[1]);

//   -------------------
const colleague1: Colleague = {
  name: "No",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2: Colleague = {
  name: "Friends",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3: Colleague = {
  name: ":(",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

export const colleagues: ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

//console.log(colleagues.current[0]);
