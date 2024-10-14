let emailvalido = "root@cbtis258.edu.mx";
let passvalido="admin123";

   const chequelogin = (event) => {
    event.preventdefault();

    const email= document.getElementById("email").Value;
    const password= document.getElementById("password").Value;
    const mensaje= document.getElementById("loginmensaje").Value;
    
    if(email === emailvalido && password === passvalido){
        mensaje.textcontent = "inicio de seción correcto";
        mensaje.style.color ="green";

        setTimeout(() => {
            window.location.href = "dashboard.html";


        }, 1000);
    }
    else {
        mensaje.textcontect="email o contraseña incorrecta";
        mensaje.style.color="red";
    }
   }
