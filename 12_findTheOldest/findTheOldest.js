//find oldest by comparing ages, if age is > oldest set oldest to it
// when done iterating return oldest obj

const findTheOldest = function(people) {

    let oldest = 0;
    let oldestPerson;

    people.forEach(person => {

        let currentAge;

        if ("yearOfDeath" in person) {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            let date = new Date();
            currentAge = date.getFullYear() - person.yearOfBirth;
        }

        if (oldest < currentAge) {
            oldest = currentAge;
            oldestPerson = person;
        }
    });

    return oldestPerson;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
];

  console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
