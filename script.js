//==========Exercise #1 ===========//

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


for(let i = 0; i < Object.keys(person3.shakes).length; i++){
    console.log(Object.keys(person3.shakes[i]))
}



for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.values(person3)[i])
    }


//=======Exercise #2=========//

function Person1(name, age){
    this.name = name;
    this.age = age;
    this.printInfo = () => `I'm ${this.name} and I'm ${this.age} years old.`;
    this.addAge = (num) => {
        this.age = this.age + num
        return `My new age is: ${this.age} years old`
    }

}

// First person
let my_friend1 = new Person1("Angela", 20)
console.log(my_friend1.printInfo())
console.log(my_friend1.addAge(1))
console.log(my_friend1.addAge(1))

// Second person
let my_friend2 = new Person1("Laura", 43)
console.log(my_friend2.printInfo())
console.log(my_friend2.addAge(3))


// =============Exercise #3 ============//

const isMore10 = (string) => {
    return new Promise( (resolve, reject) => {
        if(string.length >= 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
};

text = "Function"
text1 = "Greater than 10"

isMore10(text)
.then( (result ) => {
    console.log(`The string "${text}" has length greater than 10`)
})
.catch( (error ) => {
    console.log(`The string "${text}" has length less than 10`)
})

isMore10(text1)
.then( (result ) => {
    console.log(`The string "${text1}" has length greater than 10`)
})
.catch( (error ) => {
    console.log(`The string "${text1}" has length less than 10`)
})

