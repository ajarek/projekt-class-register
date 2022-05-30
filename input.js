export class Input{
    constructor(type,name){
        this.type = type
        this.name = name

    }
    render(){
        const Input = document.createElement('input')
        Input.classList.add('input')
        Input.setAttribute('type', this.type)
        Input.setAttribute('name', this.name)
               
        return Input
    }
    
}