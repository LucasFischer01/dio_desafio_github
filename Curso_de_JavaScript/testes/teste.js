function return_Even_values(array) {
    let even_Nums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even_Nums.push(array[i]);
        } else{
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('os números pares são:', even_Nums);
}

let array = [1, 2, 4, 5, 7, 8];
return_Even_values(array);