import { Button } from "./button.js";
import { Input } from "./input.js";
import { Label } from "./label.js";

class Register {
  constructor() {}
  
  obj = {
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  };
  saveObject(form, object) {
    
    for (let input of form) {
      if (input.name === "name") {
        object.name = input.value;
      }
      if (input.name === "email") {
        object.email = input.value;
      }
      if (input.name === "password") {
        object.password = input.value;
      }
      if (input.name === "password-repeat") {
        object.passwordRepeat = input.value;
       }    
    }
    this.render();
  }

  render() {
    const container = document.createElement("div");
    container.innerHTML = "";
    container.classList.add("container");
    const form = document.createElement("form");
    form.classList.add("form");
    const label = new Label("Name");
    const input = new Input("text", "name");
    const label2 = new Label("Email");
    const input2 = new Input("email", "email");
    const label3 = new Label("Password");
    const input3 = new Input("password", "password");
    const label4 = new Label("Repeat Password");
    const input4 = new Input("password", "password-repeat");
    const button = new Button("Register", () => {});
    form.append(
      label.render(),
      input.render(),
      label2.render(),
      input2.render(),
      label3.render(),
      input3.render(),
      label4.render(),
      input4.render(),
      button.render()
    );
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let score =0
      let password1=''
      let password2=''
      for (let input of form) {
        if(input.name===("password")){
          password1=input.value
        }

        if(input.name===("password-repeat")){
          password2=input.value
        }

        if(score === form.length-1 && password1 === password2){
          this.saveObject(form, this.obj);
          this.showAlert(`You have successfully registered: ${this.obj.name}`,"green")
        
          for (let input of form) {
            input.value = ""
            input.style.border = "1px solid #ccc"
          }
        }

        if(score === form.length-1 && password1 !== password2){
          this.showAlert("Passwords do not match","red")
        }

        if (input.classList.contains("input") && input.value === "") {
          
          input.style.border = "1px solid red";
        } else {
          input.style.border = "1px solid green";
          
          score++
        }
      }
      
    });
    const h1 = document.createElement("h1");
    h1.innerHTML = "Register With Us";
    container.prepend(h1);
    container.append(form);

    return container;
  }

showAlert(text,color){
  const alert= document.querySelector(".alert")
  alert.style.display = "flex"
  alert.innerHTML = text
  alert.style.color = color
  setTimeout(() => {
    alert.style.display = "none"
  }, 3000);
}
}
const register = new Register();
document.body.append(register.render());
