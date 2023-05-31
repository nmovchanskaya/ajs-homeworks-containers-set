import Character from './character.js';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
        throw new Error('This character is already in the team');
    }
    this.members.add(person);
    return this.members.size;
  }

  addAll(persons) {
    persons.forEach((item) => {
        this.members.add(item);
    });
    return this.members.size;
  }

  toArray() {
    let arr = [];
    this.members.forEach((item) => {
        arr.push(item);
    });
    return arr.length;
  }
}

let team = new Team();
let pers = new Character('First', 'Magician');
team.add(pers);
