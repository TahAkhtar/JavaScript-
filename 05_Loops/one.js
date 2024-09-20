// for
for (let i = 0; i <=10; i++) {
    const element = i;

    if(element == 5){
        console.log("5 is best number")
    }
    
}
// console.log(element);
for (let i = 0; i <=10; i++){
    console.log(`Outer loop:${i}`);
    for (let j = 0;  j<=10; j++) {
        // console.log(`Inner loop value ${j} and inner loop{i}`)
        console.log(i + '*'+ j + '=' + i*j)

        
    }
}

letMyArray = ["FLash","Batman","Superman"]

for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element)
    
}

// Break and Continue

for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log(`Detected 5`)
        break;
    }
    console.log(`value of is${index}`)
    
    
}

// continue :-it skip one execution and will not display 

for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log(`Detected 5`)
        continue;
    }
    console.log(`value of is${index}`)
    
    
}
