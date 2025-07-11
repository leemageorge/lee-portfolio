import responseObj from "./response";
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});


//preloader
const loader = document.getElementById("preloader")

window.addEventListener("load",()=>{
  loader.style.display = "none"
})


// show header
const shadowHeader =()=>{
  const header = document.getElementById("header");
  window.scrollY >= 60 ? header.classList.add('shadow-header') 
                         : header.classList.remove('shadow-header');
  } 
  window.addEventListener("scroll", shadowHeader)


// navbar hover effect
const links = document.querySelectorAll(".navbar a")
links.forEach((link)=>{
    link.addEventListener("click",()=>{
        links.forEach((otherLinks)=>{
            otherLinks.classList.remove("active")
        })
        link.classList.add("active")
    })
})

// mobile menu

const menuIcon = document.getElementById("menu__icon")
const menu = document.getElementById("navbar")
menuIcon.addEventListener("click",()=>{
    menu.classList.toggle("show")

})

// about section button 

const buttons = document.querySelectorAll(".about__btn button")
const contents = document.querySelectorAll(".content")

buttons.forEach((button,index)=>{
  button.addEventListener("click",()=>{
    contents.forEach(content=> content.style.display = 'none')
    contents[index].style.display= 'block'
    buttons.forEach(btn=>btn.classList.remove('active'));
    button.classList.add('active')
  })
})


  // multitext

  const typed = new Typed('.multiple-text', {
    strings: ['Web Developer','frontend developer','SEO Consultant'],
    typeSpeed: 100,
    // backSpeed:100,
    backDelay:1200,
    loop:true
  });

  // chat bot
  const chatBody = document.querySelector(".chat-body")
  const txtInput = document.querySelector("#txtInput")
  const chatContainer = document.querySelector(".chatbot-container")
  const chatIcon = document.querySelector(".chat-icon")
  const close = document.querySelector(".close")
  const send = document.querySelector(".send")

  send.addEventListener("click",()=> renderUserMessage())

 

  txtInput.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13){
      renderUserMessage()
    }
  })
  chatIcon.addEventListener("click",()=>{
   chatContainer.style.display="block"
   chatIcon.style.opacity="0";
  })
  close.addEventListener("click",()=>{
    chatContainer.style.display ="none"
    chatIcon.style.opacity="1";
  })
  const renderUserMessage = ()=>{
    const userInput = txtInput.value;
    renderMessageEle(userInput,"user")
    txtInput.value="";
   setTimeout(()=>{
    renderChatbotresponse(userInput)
    setScrollPosition();
   },600)
  }

  const renderChatbotresponse = (userInput)=>{
    const res = getChatbotresponse(userInput)
    renderMessageEle(res)

  }
  const renderMessageEle= (txt,type)=>{
    let className = "user-message"
    if(type !== "user"){
      className="chatbot-message"
    }
    const messageEle = document.createElement("div")
    const txtNode = document.createTextNode(txt)
    messageEle.classList.add(className);
    messageEle.append(txtNode)
    chatBody.append(messageEle)
  }
  const getChatbotresponse = (userInput)=>{
    return responseObj[userInput] ==undefined? "More info Pls what's app/call me ":responseObj[userInput]
}
const setScrollPosition =()=>{
  if(chatBody.scrollHeight > 0){
    chatBody.scrollTop = chatBody.scrollHeight
  }
}