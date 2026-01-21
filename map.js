function double(num){
    return num*2;
}
let arr=[2,3,4,5,6,7,]
let doubleArr=arr.map(double);
console.log(doubleArr);
const tripleArr=arr.map((num)=>num*3);
console.log(tripleArr);