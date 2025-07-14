const marvel=["thor","Iron","spider"]
const dc=["super","flash","batman"]
// marvel.push(dc)
// console.log(marvel);
// const all=marvel.concat(dc)
// console.log(all)
const allnew=[...marvel, ...dc]
// console.log(allnew)
const another_array =[1,2,3,[4,5,6], 7,[6,7,[4,5]]]
const real_arr= another_array.flat(Infinity)
console.log(real_arr)


// data scrapping
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting 

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1, s2, s3));
