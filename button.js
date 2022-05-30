export class Button{
    constructor(text,onClick){
        this.text = text
        this.onClick = onClick
    }
    render(){
        const button = document.createElement('button')
        button.classList.add('button')
        button.innerText = this.text
        button.addEventListener('click',()=>{
            this.onClick()
        })
        return button
    }
}