function myFunction(arr){
    /* [2,1,7,5] */
    /* 2 > 1
       0: 1 (arr[1])
       1: 2 (arr[2]) 
    */
    let i = 0;
    let temp = arr[0];
    for(i = 1; i < arr.length; i++){
        if(temp > arr[i]){
             arr[i-1] = arr[i];
             arr[i] = temp;
             temp = arr[i];
        }
    }
    for(i = 0; i < arr.length; i++){
        console.log(arr[i]);
    } 
}

myFunction([2,1,7,5])