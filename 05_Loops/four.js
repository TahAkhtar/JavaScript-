const myObject = {
    js:"javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"swift by Apple"
}
for (const key in myObject) {
    console.log(key);
    console("============")
    console.log(myObject[key]); // for values of Key
    console("============")
    console.log(`${key} shortcut is for ${myObject[key]}`) //it will give both key and their values
        
}
//
const programming = ["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(key)//it will give key of varibale 0,1,2,3
    console.log(programming[key]);
}