function RNG(){
    let generated = Math.floor((Math.random() * (10 - 5 + 1) + 5))
    return generated;
}
let generated1 = RNG();
let generated2 = RNG();
let generated3 = RNG();
let generated4 = RNG();

console.log(generated1)
console.log(generated2)
console.log(generated3)
console.log(generated4)