let person = {
    firstname: "Ciaran",
    lastname: "Robinson",
    age: 29,
    favorites: {
        movies: ["Thor","Sharknado","Snakes on a Plane", "LoTR"],
        artists: ["The Wiggles","Beethoven","Lil Nas X"]
    },
    greeting: () => {
        console.log("Hello world!");
    }
}

//Now lets practice acessing kay/value pairs within our object
//we can use dot bracket notation
console.log(person.firstname);
console.log(person["firstname"]);

//How do I access the movie of LoTR in my person object?

console.log(person.favorites.movies[3]);
//make a greeting function within the person object, and invoke it
person.greeting();

//lets practice some destructuring
//let {lastname} = person;
//console.log(lastname);

let {greeting} = person;
greeting();

//destructure lots of things
let {firstname, lastname, age} = person;
console.log(firstname, lastname, age);
