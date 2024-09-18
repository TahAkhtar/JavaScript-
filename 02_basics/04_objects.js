// const tinderUser = new Object() // it is Singelton Object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser={
    email:"tahseen@microsoft.com",
    fullname:{
        userfullname:{
            firstname:"Tahseen",
            lastname:"Akhtar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

// Merging Object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2);


// Spread Operator
const obj3 ={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(tinderUser)); // its gives output as array
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructing

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
// course.courseInstructor
const{courseInstructor:instructor}=course // Destructing
console.log(courseInstructor);
console.log(instructor)

// API
// JSON
/*{
    "name":"Tahseen",
    "coursename":"js in hindi",
    "price":"free"
}*/
