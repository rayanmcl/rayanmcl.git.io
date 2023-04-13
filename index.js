function sendMail() {
  var params = {
    username: document.getElementById("name").value
    email: document.getElementById("email").value
    password: document.getElementById("password").value
  };
  
const serviceID = "service_5q0ccwe";
const templateID = "template_szewk7m";

emailjs.send(serviceID, templateID, params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        console.log(res);
        alert("your message was sent sucessfully");
    }
)
.catch((err) => console.log(err));
}
