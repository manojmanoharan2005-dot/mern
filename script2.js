function sum(a,b){
    console.log(a+b);
}
const sum2=   (a,b,c)=> {
    console.log(a+b+c);
}
sum2(20,30,60);



const mul=(a,b)=>{
    return a*b;
}
const squarwe=(n)=>{
    return mul(n,n);
}

const print=(n)=>{
    let s=squarwe(n);
    console.log(s)
};
print(5);




console =  log('first');
Promise.resolve().then(console.log('From Promise'));
setTimeout(() => {
    console.log('Inside setTimeout');
},2000);

console.log('Last line of script');