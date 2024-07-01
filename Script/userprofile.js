var ul = document.getElementById('finaloutputul');
var questionNumber = document.getElementById('questionnumber');

let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");

let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");

const arrayQ1 = ["Your Name", "Surname", "Age", "Gender", "Nationalty"];
const arrayA1 = [];
const arrayQ2 = ["Area of study", "Degree", "university/institute", "Graduated or undergraduate ?", "Employment status"];
const arrayA2 = [];
const arrayQ3 = ["Country", "District", "Postel code","Email","Telephone number"];
const arrayA3 = [];
const arrayQ4 = ["Availabillty for volunteering(Hours per week)", "Willingness to travel(Miles)", "Have experience as a volunteer? Describe your previous works in short","Agree with privacy terms?"];
const arrayA4 = [];

function promptFunc(title) {
    return prompt(title);
}

let startButton = document.getElementById("startbutton");

startButton.addEventListener("click", () => {
    startButton.style.display = 'none';

    arrayA1.push(promptFunc(arrayQ1[0]));
    console.log(arrayA1)
});

let nextButton = document.getElementById("nextbtn");
let skipButton = document.getElementById("skipbtn");
let backButton = document.getElementById("backbtn");

nextButton.addEventListener("click", () => {
    startButton.style.display = 'none';
    next();
});

skipButton.addEventListener("click", () => {
    startButton.style.display = 'none';
    skip();
});

backButton.addEventListener("click", () => {
    startButton.style.display = 'none';
    back();
});

function setQuestion(array) {
    q1.innerHTML = array[0] + ":";
    q2.innerHTML = array[1] + ":";
    q3.innerHTML = array[2] + ":";
    q4.innerHTML = array[3] + ":";

    if (array.length == 5) {
        q5.innerHTML = array[4] + ":";
    } else {
        q5.style.display = 'none'
        a5.style.display = 'none'
    }
}

progressBar(0);

function progressBar(completed) {
    let progress = document.getElementById("progress");
    let progressBarLine = document.getElementById("progressbarline");

    if (completed == 0) {
        progress.innerHTML = "Profile Completed 0%";
        progressBarLine.style.width = "0%";
        questionNumber.innerHTML = "STEP 1 Perosnal Detials | Question 1/5";
        setQuestion(arrayQ1);

    } else if (completed == 1) {
        progress.innerHTML = "Profile Completed 20%";
        progressBarLine.style.width = "25%";
        questionNumber.innerHTML = "STEP 2 Studies | Question 1/5";
        setQuestion(arrayQ2);
    } else if (completed == 2) {
        progress.innerHTML = "Profile Completed 40%";
        progressBarLine.style.width = "50%";
        questionNumber.innerHTML = "STEP 3 Contacts | Question 1/5";
        setQuestion(arrayQ3);
    } else if (completed == 3) {
        progress.innerHTML = "Profile Completed 60%";
        progressBarLine.style.width = "75%";
        questionNumber.innerHTML = "STEP 4 Availabilty and content | Question 1/4";
        setQuestion(arrayQ4);
    } else {
        progress.innerHTML = "Profile Completed 100%";
        progressBarLine.style.width = "100%";
    }
}

function loop(array1, array2) {
    for (let i = array1.length; i < array2.length; i++) {
        array1.push(promptFunc(array2[i]));
        break;
    }
}

function setAnswer(array) {
    console.log(array[0])
    if (array[0] != null) {
        a1.innerText = array[0];
    }
    if (array[1] != null) {
        a2.innerText = array[1];
    }
    if (array[2] != null) {
        a3.innerText = array[2];
    }
    if (array[3] != null) {
        a4.innerText = array[3];
    }
    if (array[4] != null) {
        a5.innerText = array[4];
    }
}

function emptyAnswer() {
    a1.innerHTML = "";
    a2.innerHTML = "";
    a3.innerHTML = "";
    a4.innerHTML = "";
    a5.innerHTML = "";
}

function finalOutputLoop(arrayQ, arrayA) {
    for (let i = 0; i < arrayA.length; i++) {
        var li = document.createElement('li');
        var questionParagraph = document.createElement('p');
        questionParagraph.textContent = arrayQ[i] + ": ";
        var answerParagraph = document.createElement('p');
        answerParagraph.textContent = arrayA[i];
        li.appendChild(questionParagraph);
        li.appendChild(answerParagraph);

        ul.appendChild(li);
    }
}

function finalOutput() {
    document.querySelector(".output").style.display = 'none';
    document.querySelector(".finaloutput").style.display = 'block';

    finalOutputLoop(arrayQ1, arrayA1);

    var li = document.createElement('li');
    var div = document.createElement('div');
    li.appendChild(div);
    ul.appendChild(li);

    finalOutputLoop(arrayQ2, arrayA2);

    var li = document.createElement('li');
    var div = document.createElement('div');
    li.appendChild(div);
    ul.appendChild(li);

    finalOutputLoop(arrayQ3, arrayA3);

    var li = document.createElement('li');
    var div = document.createElement('div');
    li.appendChild(div);
    ul.appendChild(li);

    finalOutputLoop(arrayQ4, arrayA4);
    
    var submitButton = document.createElement('button');
    submitButton.textContent = "Submit";
    ul.appendChild(submitButton); 
}

function next() {

    if (arrayA1.length < 5) {
        loop(arrayA1, arrayQ1);
        setAnswer(arrayA1)
        if (arrayA1.length == 5) {
            progressBar(1);
            emptyAnswer();
        }
    } else if (arrayA2.length < 5) {
        loop(arrayA2, arrayQ2);
        setAnswer(arrayA2)
        if (arrayA2.length == 5) {
            progressBar(2);
            emptyAnswer();
        }
    } else if (arrayA3.length < 5) {
        loop(arrayA3, arrayQ3);
        setAnswer(arrayA3)
        if (arrayA3.length == 5) {
            progressBar(3);
            emptyAnswer();
        }
    } else if (arrayA4.length < 4) {
        loop(arrayA4, arrayQ4);
        setAnswer(arrayA4)
        if (arrayA4.length == 4) {
            progressBar(4);
            emptyAnswer();
            finalOutput();
        }
    }
}

function skip() {

    if (arrayA1.length < 5) {

        arrayA1.push("");
        console.log(arrayA1)
        if (arrayA1.length == 5) {
            progressBar(1);
            emptyAnswer();
        }

    } else if (arrayA2.length < 5) {
        arrayA2.push("");
        console.log(arrayA2)
        if (arrayA2.length == 5) {
            progressBar(2);
            emptyAnswer();
        }
    } else if (arrayA3.length < 5) {
        arrayA3.push("");
        console.log(arrayA3)
        if (arrayA3.length == 5) {
            progressBar(3);
            emptyAnswer();
        }
    } else if (arrayA4.length < 4) {
        arrayA4.push("");
        console.log(arrayA4)
        if (arrayA4.length == 4) {
            progressBar(4);
            emptyAnswer();
            finalOutput();
        }
    }
}
function back() {
    if (arrayA4.length > 0 && arrayA4.length <= 4) {
        arrayA4.pop(); // Remove the last answer from step 4
        progressBar(2); // Update progress bar and question number to step 3
        setAnswer(arrayA4); // Set answers to questions for step 4
    } else if (arrayA3.length > 0 && arrayA3.length <= 5) {
        arrayA3.pop(); // Remove the last answer from step 3
        progressBar(1); // Update progress bar and question number to step 2
        setAnswer(arrayA3); // Set answers to questions for step 3
    } else if (arrayA2.length > 0 && arrayA2.length <= 5) {
        arrayA2.pop(); // Remove the last answer from step 2
        progressBar(0); // Update progress bar and question number to step 1
        setAnswer(arrayA2); // Set answers to questions for step 2
    } else if (arrayA1.length > 0 && arrayA1.length <= 5) {
        arrayA1.pop(); // Remove the last answer from step 1
        progressBar(0); // Update progress bar and question number to step 1
        setAnswer(arrayA1); // Set answers to questions for step 1
    }
}
