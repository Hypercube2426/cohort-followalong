let a = 2;
var b = "hello";
console.log("lets say " + b + " to everyone");
if(a ==1) {
    console.log("1 is true");
}
else{
    console.log(b + " everyone");
}

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
}
const arr = [2,4,6,8,100,7];
for(let i = 0 ; i < arr.length; i++){
    console.log(arr[i]);
    if(arr[i] % 2 == 0){console.log("even")}
    else{console.log("odd");}
}
const userobj= [
    {firstname:"dhruv",gender:"male" , metadata:{age : "22"}},
    {firstname:"ishita",gender:"female",metadata:{age : "21"}}
    
    
]
console.log()
console.log()
for(let i = 0 ; i < userobj.length ; i++){
    console.log(
        userobj[i]["firstname"] + " is a " +userobj[i]["gender"] +" age is " + userobj[i]["metadata"]["age"]    
        );

}console.log()
console.log()





function findsum(a,b){
    console.log(a+b)
}

findsum(2,3);
