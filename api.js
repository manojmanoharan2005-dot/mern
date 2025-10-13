async function myfunction(){
    try{
        let response=await fetch('https://jsonplaceholder.typicode.com/posts');
        let data=await response.json();
        console.log(data);
    }
    catch(error){
        console.log('error',error);
    }
    finally{
        console.log('fetch operation completed');
    }
}
myfunction();


let name='sneha';
let age=21;
console.log(name);
console.log(age);

