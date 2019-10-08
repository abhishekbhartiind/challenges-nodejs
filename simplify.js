let personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
];

let jediPersonnel = personnel.filter(person => person.isForceUser);
// Result: [{...}, {...}, {...}] (Luke, Ezra and Caleb)

/**
 * map()
 * The callback runs for each value in the array and returns each new value in the resulting array.
 * Keep in mind that the resulting array will always be the same length as the original array.
 * 
 */
let jediScores = jediPersonnel.map(jedi => jedi.pilotingScore + jedi.shootingScore);
// Result: [154, 110, 156]

/**
 * Just like .map(), .reduce() also runs a callback for each element of an array.
 * What’s different here is that reduce passes the result of this callback (the accumulator) from one array element to the other.
 */
let totalJediScore = jediScores.reduce((acc, score) => {
    return acc + score;
}, 0)
// Result: 420

//Pretty version

const totalJedi = personnel
        .filter(person => person.isForceUser)
        .map(jedi => jedi.pilotingScore + jedi.shootingScore)
        .reduce((acc, score) => acc + score, 0);

/**
 * .some()
    This array method helps you determine if one or more of its values correspond to
    something you’re looking for. 
 *  The function must return a boolean
 */

 let operatives = [
    { id: 12, name: 'Baze Malbus', pilot: false },
    { id: 44, name: 'Bodhi Rook', pilot: true },
    { id: 59, name: 'Chirrut Îmwe', pilot: false },
    { id: 122, name: 'Jyn Erso', pilot: false }
];

const listHasPilots = operatives.some(operative => operative.pilot);
console.log(listHasPilots)

/**
 * .find()
    This array method does exactly what it says: it finds what you’re looking for. 
    .find() will return the first value that corresponds to the passed condition. 
 */

const firstPilot = operatives.find(operative => operative.pilot);
console.log(firstPilot)

/**
 * Array.every() function checks whether all the elements of the array satisfy the given condition
 * or not that is provided by a function passed to it as the argument.
 */

const everyEl = [56, 91, 18, 88, 12].every((element, index, array) => {
    return (element % 2 == 1)
})

console.log(everyEl)