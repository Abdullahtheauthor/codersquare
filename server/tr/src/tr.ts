// type nums = 1 | -1 | 0;
// function compare (num1: number , num2: number): nums {
//     if(num1 === num2){
//         return 0;
//     }
//     else if (num2 > num1){
//         return 1;
//     }
//     else   {
//         return -1;
//     }
// }

// console.log(compare(20,23));
// console.log(compare(20,20));
// console.log(compare(20,2));

// test
// never
// function logging(msg : string): never {
//     console.log(msg);
//     while (true) {
//         console.log(msg);
//     }
    
  
// }
// console.log(logging("test"));


// ===================================
// Type assertion
// you use it to assert the type and typescript won't validate it after your assertion
//ypu have to ways of declaring it
// let myImg= document.getElementById('mtImg')  as HTMLImageElement 
// or
// let myImg= <HTMLImageElement> document.getElementById('mtImg')  
// console.log(myImg.src);

// to prove typescript won't validate it after your assertion
let data: any =1000; 
console.log((data as string).repeat(3));   // This will give the error in run time not in compiloe time


type ExpressHandler<req,res> = {
    req:string,
    res:string
};
