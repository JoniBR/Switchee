import $switch from "../src/index.js";

// lets sort people into groups by age
const ageGroups = {
  infants: [],
  kids: [],
  teens: [],
  adults: [],
  oldTimers: [],
  epics: []
};
const switcheroo = $switch([
  {
    matcher: "inRange",
    params: 4,
    op: "smaller-equals",
    useVal: true,
    action: infant => ageGroups.infants.push(infant),
    useProperty: "age" // uses the properety provided for to match the case
  },
  {
    matcher: "inRange",
    params: [5, 12],
    op: "between-inclusive",
    useVal: true,
    action: kid => ageGroups.kids.push(kid),
    useProperty: "age"
  },
  {
    matcher: "inRange",
    params: [12, 20],
    op: "between",
    useVal: true,
    action: teen => ageGroups.teens.push(teen),
    useProperty: "age"
  },
  {
    matcher: "inRange",
    params: [20, 70],
    op: "between-inclusive",
    useVal: true,
    action: adult => ageGroups.adults.push(adult),
    useProperty: "age"
  },
  {
    matcher: "inRange",
    params: [70, 100],
    op: "between",
    useVal: true,
    action: oldTimer => ageGroups.oldTimers.push(oldTimer),
    useProperty: "age"
  },
  {
    matcher: "inRange",
    params: 100,
    op: "bigger-equals",
    useVal: true,
    action: epic => ageGroups.epics.push(epic),
    useProperty: "age"
  }
]);

const people = [
  { name: "Yoni", age: 26 },
  { name: "Anna", age: 28 },
  { name: "Alon", age: 4 },
  { name: "Nava", age: 12 },
  { name: "George", age: 55 },
  { name: "Billi", age: 72 },
  { name: "Pablo", age: 120 }
];

people.forEach(person => switcheroo(person));
console.log(ageGroups);
