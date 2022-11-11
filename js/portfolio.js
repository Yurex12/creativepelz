let password = document.getElementById("password");
     let username = document.getElementById("username");
     let showPassword = document.getElementById("eye-image");
     let lock = document.getElementById("locked");
     let message = document.getElementById("message");
     let popUp = document.querySelector(".pop-up-alert")
    let closePopUp = document.querySelector(".btn-try");
    let emptyFieldMessage = document.querySelector(".empty-field-message")
       let closePopMessage = document.querySelector(".cancel")
      
    
     
     
     function authenticate() {
     if(password.type === "password") {
         password.type = "text"
         showPassword.src = "media/hide.png"
     }else {
         password.type = "password"
         showPassword.src = "media/show.png"
     }
         
     }
     
     
     function validation () {
     if(password.value === null || password.value === "" || username.value === null || username.value === "" ) {
         emptyFieldMessage.classList.add("show-empty-message")          
       }
           
       else{
         
     
     if (password.value === "cp2022") {
         lock.src = "media/unlocked.png"
         message.innerHTML = "Login Successful"
         message.style.color = "#09AE92"    
          setTimeout(login , 1500)     
        function login (){                  
         window.location.assign("portfoliopage.html")
           
          
         }
     }else {
         lock.src = "media/failed.png";
         message.innerHTML = "Login Failed";
         message.style.color = "red";
         popUp.classList.add("show-pop-up");
          let usernameVal = username.value;
    document.getElementById("demo").innerHTML = usernameVal; 
         
     }
       }  
       
       } 
    closePopUp.addEventListener("click" , ()=> {
         popUp.classList.remove("show-pop-up");  
       })
       
       closePopMessage.addEventListener("click" , ()=> {
         emptyFieldMessage.classList.remove("show-empty-message");  
       })
       
       
