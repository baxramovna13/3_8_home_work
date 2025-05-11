// function star(num,str) {
//     let result=""
//     for (let i = 0; i < num; i++) {

//         for (let j = 0; j < num; j++) {

//             if (i==0 || j==0 || i==num-1 || j==num-1 || i==j || j==num-i-1 ){
//                 result+=str
//             }else{
//                 result+="  "
//             }

//         }
//          result+="\n"
//     }
//     return result
// }console.log(star(10," *"));

// // // 2 masala
// function star(num,str) {
//     let result=""
//     for (let i = 0; i < num; i++) {

//         for (let j = 0; j < num; j++) {

//             if (i==0 || j==0 || i==num-1 || j==num-1  || (i<num/2 && j>=i && j<num-i)){
//                 result+=str
//             }else{
//                 result+="  "
//             }

//         }
//          result+="\n"
//     }
//     return result
// }console.log(star(15," *"));

// 3 home work

// function repeadStr(str,num) {
// let result=""
// for (let i=0; i<num; i++) {
//     result+=str
// }
// return result
// }console.log(repeadStr("Hello",5));

// 4 home Work

// function sliceArr(arr,num) {
//     let result=[]
//     let slice1=arr.slice(0,num+1)
//     let slice=arr.slice(num+1)
//     return slice.concat(slice1)
// }console.log(sliceArr([1,2,3,4,5,6,7],3));

// 5 home Work

// function objFnc(obj) {
//   let result = 0;
//   for (const key in obj) {
//     if ( typeof obj[key] ==="number") {
//       result += Number(obj[key]);
//     }
//   }
//   return result
// }
// console.log(
//   objFnc({
//     name: "Usmon",
//     age: 22,
//     surname: "Aliyev",
//     birthyear: "2000",
//     money: 4000,
//   })
// );

// 6 home work

// function split(str) {
//   let result = [];
//   let word = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char !== " ") {
//       word += char;
//     } else if (word.length > 0) {
//       result.push(word);
//       word = "";
//     }
//   }
//   if (word.length > 0) {
//     result.push(word);
//   }
//   return result;
// }
// console.log(split("Hello world"));

// 7 home 

// function powFour(num) {

//     if (num%4==0 || num==1) {
//         return true
//     }else{
//         return false
//     }
// }console.log(powFour(1));

// 8 home work

// function reverseArr(arr) {
//     let reverse=[]
//     for (let i= arr.length-1; i>=0; i--) {
//       reverse.push(arr[i])
        
//     }
//     return reverse
// }console.log(reverseArr(["h","e","l","l","o"]));

// 9 home work

// function strAbc(str) {
//    let vowels="aeuoiAEUOI"
//    let vowelist=[]
//    for (let i = 0; i < str.length; i++) {
//     if(vowels.includes(str[i])){
//         vowelist.push(str[i])
//     }
    
//    }
//    vowelist.reverse()
//    let result=""
//    let vowelIndex=0
//    for (let i = 0; i < str.length; i++) {
    
//     if (vowels.includes(str[i])) {
//         result+=vowelist[vowelIndex]
//         vowelIndex++
//     }else{
//         result+=str[i]
//     }
    
//    }
//     return result
// }
// console.log(strAbc("IceCrEAm"));
