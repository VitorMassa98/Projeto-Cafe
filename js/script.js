//Loop should be added to the buttons to simplify the code
//Loop deve ser adicionado para simplificar o código

const buttonTop = document.querySelector("#back-to-top");
    buttonTop.addEventListener("click",()=>{
        window.scrollTo(0,0);
    })


const buttonHome = document.querySelector("#home");

    buttonHome.addEventListener("click", () => {
      window.scrollTo(0,100);  
      if (buttonHome.classList.contains("active")) {
        buttonHome.classList.remove("active");
      } else {
        buttonHome.classList.add("active");
      }
    });

    
const buttonAbout = document.querySelector("#about");

    buttonAbout.addEventListener("click", () => {
      window.scrollTo(0,750);
      if (buttonAbout.classList.contains("active")) {
        buttonAbout.classList.remove("active");
      } else {
        buttonAbout.classList.add("active");
      }
    });

const buttonServices = document.querySelector("#service");

    buttonServices.addEventListener("click", () => {
      window.scrollTo(0,1850);
      if (buttonServices.classList.contains("active")) {
        buttonServices.classList.remove("active");
      } else {
        buttonServices.classList.add("active");
      }
    });

const buttonMenu = document.querySelector("#menu");

    buttonMenu.addEventListener("click", () => {
      if (buttonMenu.classList.contains("active")) {
        buttonMenu.classList.remove("active");
      } else {
        buttonMenu.classList.add("active");
      }
    });

const buttonPages = document.querySelector("#pages");

    buttonPages.addEventListener("click", () => {
      if (buttonPages.classList.contains("active")) {
        buttonPages.classList.remove("active");
      } else {
        buttonPages.classList.add("active");
      }
    });

const buttonContact = document.querySelector("#contact");

    buttonContact.addEventListener("click", () => {
      if (buttonContact.classList.contains("active")) {
        buttonContact.classList.remove("active");
      } else {
        buttonContact.classList.add("active");
      }
    });

