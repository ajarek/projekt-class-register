export class Label{
    constructor(text){
        this.text = text
    }
    render(){
        const Label = document.createElement('label')
        Label.classList.add('label')
        Label.innerText = this.text
        return Label
    }
}