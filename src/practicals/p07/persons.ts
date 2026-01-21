export interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

export interface ValidPerson {
  firstName: string;
  lastName: string;
  age: number;
}

function isValidPerson(p: Person): p is ValidPerson {
  return !!(p.firstName && p.lastName && p.age !== undefined && p.age >= 0 && p.age <= 100);
}

export function sortPersons(persons: Person[]): Person[] {
  return persons
    .filter(isValidPerson) 
    .sort((a, b) => 
      a.age - b.age || 
      a.firstName.localeCompare(b.firstName) || 
      a.lastName.localeCompare(b.lastName)
    );
}
  


const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

console.log(sortPersons(persons));

