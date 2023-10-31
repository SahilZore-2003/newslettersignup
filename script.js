const email = document.querySelector("#email");
const subscribe = document.querySelector("#subscribe");
const popup = document.querySelector("#popup");
const form = document.querySelector("#form");
const error = document.querySelector("#error");
const useremail = document.querySelector("#useremail");


const showpopup = ()=>{
    popup.style.top = "50%"
}

subscribe.addEventListener("click",()=>{
    if(email.value == ""){
        error.style.visibility = "visible";
        email.style.outline = "2px solid red"
    }
    else{
        form.style.display = "none";
        useremail.innerText = `${email.value}`
        showpopup()
    }
   
})

email.addEventListener("input",()=>{
    error.style.visibility = "hidden";
        email.style.outline = "2px solid #242742"
})

const reload = ()=>{
    window.location.reload()
}