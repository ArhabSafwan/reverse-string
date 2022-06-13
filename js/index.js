// arr=[1,2,3,4,5];
// for (let i = arr.length-1; i >= 0; --i){
//     console.log(arr[i]);
// }  


function reverse(text) {

   var a='';
    for (let i = text.length-1; i >= 0; --i){
        // document.getElementById('output').innerHTML += text[i];
        // console.log(text[i]);
    a+=text[i];   
    }
    
    document.getElementById('1').innerHTML=a;
    
}

