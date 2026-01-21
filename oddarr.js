function oddeven(arr){
    return arr.map(num => num % 2 === 0 ? "True" : "False");
}   
let arr=[1,2,3,4,5,6,7,8,9];
console.log(oddeven(arr));


let array1=[1,2,3,4,5,6];
let sum=array1.reduce((product,current)=>{
    return product*current;
},1)
console.log(sum);

let array2=[1,2,3,4,5,6];
let sum1=array2.reduce((sum,current)=>{
    return sum+current;
},1)
console.log(sum1);

let arr1=[1,2,3,4,5,6,7,8,9];
let evenarr=arr1.filter(num=>num%2==0);
console.log(evenarr);
let oddarr=arr1.filter(num=>num%2!=0);
console.log(oddarr);



let b=[1,2,3,4,5,6];
const[one,two]=b;
console.log(one);
console.log(two);


let c=[1,2,3,4,5,6];
const[four,...three]=c; 
console.log(three);

let d={name:"sneha",age:21};
const{age}=d;
console.log(age);
const{name}=d;
console.log(name);

const promise=new Promise((resolve,reject)=>{
    // resolve or reject as needed
    resolve('done');
})
console.log('before promise execution');

promise
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))
    .finally(()=>console.log('promise is completed'));

console.log('after promise execution');















































































































































































































