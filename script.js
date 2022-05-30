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
        if(object.password ===object.passwordRepeat){
        
      }else{
       
        this.showAlert(form,"Passwords do not match","red","negative")
       
        
          
        
      }
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
      for (let input of form) {
        if(score === form.length-1){
          this.saveObject(form, this.obj);
          this.showAlert(form,`You have successfully registered: ${this.obj.name}`,"green","positive")
          form.reset()
       
          for (let input of form) {
            input.value = ""
            input.style.border = "1px solid #ccc"
          }
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

showAlert(container,text,color,myClass){
  const alert= document.createElement("div")
  alert.classList.add(myClass)
  alert.innerHTML = text
  alert.style.color = color
  container.append(alert)
}
}
const register = new Register();
document.body.append(register.render());
