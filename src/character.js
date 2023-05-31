export default class Character {
  constructor(name, type) {
    const typeArr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
