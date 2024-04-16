let GlobalSentence = "this is sentence";

function showSentence(){
    let localSentence = "this is local"
    console.log(GlobalSentence)
}

function createSentence(sentenceToCreate){
    let sentence = sentenceToCreate + " (local)";
    return sentence;

}

showSentence()

let mySentence = createSentence("Our sentence")
console.log(mySentence)

function f(x){
    let result =  (x + 1) * (x + 1)
    return result
} 

let answer = f(5);
console.log(answer)

{
   let blockVar = "This is blocked" 
   console.log(blockVar)
   console.log(GlobalSentence)
}
