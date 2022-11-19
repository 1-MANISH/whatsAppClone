let midmsgContainer = document.getElementById("midmsgContainer");
let msg = document.getElementById('msg');

msg.addEventListener('keypress',(event)=>{

    

    if (event.key === "Enter") {
        
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let p = document.createElement("p");
        let p1 = document.createElement("p");

        p.innerText = msg.value;
        p1.innerText = new Date().getHours()+":"+new Date().getMinutes();

       
        div1.appendChild(p1);

        div.appendChild(p);
        div.appendChild(div1);

        div.classList.add("receiver");

        midmsgContainer.appendChild(div);

        const message = {
            "Hey":"Hii",
            "hey":"Hii",
            "Hello":"Hii",
            "hello":"Hii",
            "Hii":"Hello",
            "hii":"Hello",
            "Bye":"Bye",
            "bye":"Bye",
            "Welcome":"Most welcome",
            "How are you ?":"I am fine",
            "how are you ?":"I am fine",
            "how are you?":"I am fine",
            "How are you?":"I am fine",
            "how are you":"I am fine",
            "How are you ":"I am fine", 
            "How are you":"I am fine", 
            "what is your name":"I am computer", 
            "what is your name?":"I am computer", 
            "what is your name ?":"I am computer", 
            "What is your name?":"I am computer", 
            "What is your name ?":"I am computer", 
            "What is your name ?":"I am computer", 
            "Where are you from ?":"I am from space",
            "where are you from ?":"I am from space",
            "where are you from":"I am from space",
            "where are you from?":"I am from space",
            "Good Morning":"good morning!",
            "Good morning":"good morning!",
            "good morning":"good morning!",
            "Good Evening":"good evening!",
            "Good evening":"good evening!",
            "good evening":"good evening!",
            "Good Night":"good night ! ",
            "good night":"good night !",
            "Good night":"good night !",
            "you are computer":"yes i am!",
            "You are computer":"yes i am!",
            "😍":"Aree bhai",
            "👍":"Tq Bhai",
            "🇮🇳":"India India",
            "🇮🇳🇮🇳🇮🇳":"Jai Hind",
            "How web dev course is going":"it's going good",
            "How web dev course is going?":"it's going good",
            "Okk if You need any help, Than ask me":"I'wll",
            "Okk thank you":"No , it's pleasure for me",
            "Okk":"Thik hai",
            "❤️":"❤️"



        }
    
       
        setTimeout(()=>{
            for (const key in message) {

                if(key == msg.value){
    
    
                    let div = document.createElement("div");
                    let div1 = document.createElement("div");
                    let p = document.createElement("p");
                    let p1 = document.createElement("p");
                    
                    
                    p.innerText = message[key];
                    p1.innerText = new Date().getHours()+":"+new Date().getMinutes();
    
                
                    div1.appendChild(p1);
    
                    div.appendChild(p);
                    div.appendChild(div1);
    
                    div.classList.add("sender");
                    div.classList.add("even");
    
                    midmsgContainer.appendChild(div);
    
                } 
                
            }
            
        },1000);
        

      setTimeout(()=>{
        msg.value="";
      },1000)
    }

})


const fbox = document.querySelectorAll(".f-box");
const currChatman = document.getElementById("currChatman");
const currChatmanMob = document.getElementById("currChatmanMob");

fbox.forEach((value,index)=>{

    value.addEventListener('click',()=>{


        currChatman.innerText = `${value.childNodes[1].childNodes[3].childNodes[1].innerText}`;
        currChatmanMob.innerText = `${value.childNodes[1].childNodes[3].childNodes[3].innerText}`;
    })

})

// const questionBox = {
//     "Hii":"Hello",
//     "hii":"Hello",
//     "How are you":"I am fine",
//     "How are you ?":"I am fine",
//     "How are you?":"I am fine",
//     "How web dev course is going":"it's going good",
//     "How web dev course is going?":"it's going good",
//     "Okk if You need any help, Than ask me":"I'wll",
//     "Okk thank you":"No , it's pleasure for me",
//     "Okk":"Thik hai",
//     "Bye":"Bye Bye ...",
//     "❤️":"❤️"
// }

// function suggestQuestion(){
//     let question = document.getElementById("question")
//     for(let key in questionBox){
//             question.innerHTML = `${key}`;  
//     }
// }
// suggestQuestion()