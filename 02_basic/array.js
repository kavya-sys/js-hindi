// array
const myArr =[0, 1, 2, 3, 4]
const myheroes=["ABC","CDE"]

console.log(myArr[0]);
// shallow and deep copy f
// array methods
// myArr.push(6)
// console.log(myArr)
// myArr.push(7)
// console.log(myArr)
// console.log(myArr.pop())
// myArr.unshift(9) //push ki tarah but push in front
// myArr.shift() //pop ki tarah from front
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr)
// const newArr=myArr.join() //string mai convert krdega 
// console.log(myArr);
// console.log(typeof newArr);


// slice
console.log("A ",myArr);
const myn1 =myArr.slice(1,3); //original array ko change nhi krega
console.log(myn1);
console.log("B ",myArr)
const myn2=myArr.splice(1,3) // original array mai hi change krdega
console.log("C  ", myn2)