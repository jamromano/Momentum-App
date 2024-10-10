
//Time
function showTime() {
    let time = document.getElementById("time");
    setInterval(() => {
        let date = new Date();
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        time.textContent = `${hours}:${minutes}`;
    }, 1000);
}
showTime();

//Name and Greeting
function editName() {
    let name = document.querySelector("#name").value.trim();
    if (name) {
        displayGreeting(name);
        document.getElementById("name").style.display = "none";
        document.getElementById("nameButton").style.display = "none";
    }
}

function displayGreeting(name) {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour >= 1 && hour < 12) {
        greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    const greetingMessage = `${greeting}, ${name}!`;
    document.getElementById('greeting').innerText = greetingMessage;
}

document.getElementById("name").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        editName();
    }
});
// document.getElementById("nameButton").addEventListener("click", editName);

//Quote
const quotes=[
    "The world is a book, and those who do not travel read only one page. Saint Augustine",
    "Traveling: it leaves you speechless, then turns you into a storyteller. Ibn Battuta",
    "To travel is to live. Hans Christian Andersen",
    "Life is short and the world is wide",
]

function displayRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteToday").textContent = quotes[randomNumber];
}
displayRandomQuote();

function addNewQuote() {
    const newQuote = document.getElementById("newQuote").value.trim();
    const quoteError = document.getElementById("quoteError");

    if (newQuote === "") {
        quoteError.textContent = "Please enter a quote.";
        quoteError.style.display = "block";
        return;
    } else {
        quoteError.style.display = "none";
        quotes.push(newQuote); 
        displayRandomQuote(); 
        document.getElementById("newQuote").value = ""; 
        // console.log(quotes)
    }
}

document.getElementById("addQuote").addEventListener("click", addNewQuote);

document.getElementById("addNewQuote").addEventListener("click", function () {
    const quotePopup = document.querySelector(".popupQuote");
    quotePopup.style.display = quotePopup.style.display === "block" ? "none" : "block";
});


//Focus
function setFocus(){
    const focusInput = document.getElementById("newFocus").value.trim();
    const focusError = document.getElementById("focusError");

    if (focusInput === "") {
        focusError.textContent = "Please enter a focus for today.";
        focusError.style.display = "block"; 
        return; 
    } else {
        focusError.style.display = "none"; 
        document.getElementById("focusDisplay").innerText = `Today's Focus: ${focusInput}`;
        document.querySelector(".focus h3").style.display = "none";
        document.getElementById("newFocus").style.display = "none";
        document.getElementById("submitFocus").style.display = "none";
    }
}

document.getElementById("newFocus").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        setFocus();
    }
});
// document.getElementById("submitFocus").addEventListener("click", setFocus);

//Tasks
function addTask() {
    const taskInput = document.getElementById("newTask").value.trim();
    const taskError = document.getElementById("taskError");
    const taskList = document.getElementById("taskList");

    if (taskInput === "") {
        taskError.textContent = "Please enter a task.";
        taskError.style.display = "block"; 
        return; 
    } else {
        taskError.style.display = "none"; 
       
        // Create a new task item
        const listItem = document.createElement("div");
        const label = document.createElement("label");
        label.textContent = taskInput;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function() {
            label.classList.toggle("completed");
        };

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        taskList.appendChild(listItem);

        document.getElementById("newTask").value = ""; 
    }
}

document.getElementById("addTask").addEventListener("click", addTask);

document.getElementById("tasksTitle").addEventListener("click", function () {
    const taskPopup = document.querySelector(".popupTask");
    const tasksTitle = document.getElementById("tasksTitle");

    if (taskPopup.style.display === "block") {
        taskPopup.style.display = "none";
        tasksTitle.classList.remove("active"); 
    } else {
        taskPopup.style.display = "block";
        tasksTitle.classList.add("active"); 
    }
});

const backgroundImages = [
    '/Users/jamilleromano/Desktop/Avion/Momentum App/img1.jpeg',
    '/Users/jamilleromano/Desktop/Avion/Momentum App/img3.jpeg',
    '/Users/jamilleromano/Desktop/Avion/Momentum App/img16.jpeg',
    '/Users/jamilleromano/Desktop/Avion/Momentum App/img18.jpeg',
    '/Users/jamilleromano/Desktop/Avion/Momentum App/img20.jpeg',
    '/Users/jamilleromano/Desktop/Avion/Momentum App/img22.jpeg',
]

function setBackground() {
    let background = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = `url('${backgroundImages[background]}')`;
}
setBackground();
