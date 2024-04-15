let sentence = "This is a sentence";

function readTheSentence(sentenceToRead){
    console.log(sentenceToRead);
}; //Function does not return

readTheSentence(sentence);

function f(x){
    return (x + 1) * (x + 1)
} //function returns

let result = f(2);
console.log(result);

function createSentence(senteceToCreate){
    console.log("creating the sentence: " + senteceToCreate);
    return senteceToCreate;
};

let createdSentence = createSentence("This is a created sentence");

console.log(createdSentence);