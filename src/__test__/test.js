import Team from '../team.js';
import Character from '../character.js';

test('test add character', () => {
  const team = new Team();
  const pers = new Character('First', 'Magician');
  const nPers = team.add(pers);
  expect(nPers).toBe(1);
});

test('test add 2nd character', () => {
  const team = new Team();
  const pers = new Character('First', 'Magician');
  const pers2 = new Character('Sec', 'Daemon');
  team.add(pers);
  const nPers = team.add(pers2);
  expect(nPers).toBe(2);
});

test('test add the same character', () => {
  const team = new Team();
  const pers = new Character('First', 'Magician');
  team.add(pers);
  expect(() => {
    team.add(pers);
  }).toThrow('This character is already in the team');
});

test('test addAll', () => {
  const team = new Team();
  const persons = [];
  persons.push(new Character('First', 'Magician'));
  persons.push(new Character('Sec', 'Daemon'));
  const nPers = team.addAll(persons);
  expect(nPers).toBe(2);
});

test('test toArray', () => {
  const team = new Team();
  const persons = [];
  persons.push(new Character('First', 'Magician'));
  persons.push(new Character('Sec', 'Daemon'));
  team.addAll(persons);
  const nPers = team.toArray();
  expect(nPers).toBe(2);
});
