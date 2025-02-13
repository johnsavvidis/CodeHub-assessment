function myFunction(){
    let i = 0;
    for(i = 0; i < 100; i++){
        if((i%3 === 0)&&(i%5 === 0)){
            console.log(i + "/3" + i + "/5");
        }
        else if((i%3 === 0)){
            console.log(i + "/3"); 
        }
        else if((i%5 === 0)){
            console.log(i + "/5");
        }
    }
}

myFunction();