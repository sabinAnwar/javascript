var array=[]

for(let i = 0; i <= 10; i++){
    var number = Math.random() * 10+1;
    var randomWithoutDecimal = Math.floor(number);
    console.log(number);

    console.log(randomWithoutDecimal);
    array.push(randomWithoutDecimal);
}
console.log(array);