
let funIsLegal;

let classes = ["myanmar", "english", "maths", "chemistry", "physics", "biology"];

checkForFun(classes); //calling functions;


function checkForFun(subjects) {
    for(let i = 0; i < subjects.length; i++){
        if(subjects[i] == "myanmar"){
            funIsLegal = true;
            if(funIsLegal){
                console.log("Class " + subjects[i] + " : " + "fun is legal now")
            }
        }
        if(subjects[i] == "english"){
            funIsLegal = true;
            if(funIsLegal){
                console.log("Class " + subjects[i] + " : " + "fun is legal now")
            }
        }
        switch (subjects[i]){
            case "maths":
                funIsLegal = false;
                if(funIsLegal == false){
                 console.log("Class " + subjects[i] + " : " + "fun is illegal now")
            }
            break;
            case "chemistry":
                funIsLegal = false;
                if(funIsLegal == false){
                    console.log("Class " + subjects[i] + " : " + "fun is illegal now + sleepy")
                }
            break;
               
           


        }

    }
}


