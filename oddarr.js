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