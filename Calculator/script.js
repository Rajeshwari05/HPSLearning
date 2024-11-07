// function onClickFunction(){ 
//     console.log('clicked on equal operator');
// }
let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value=string;
            console.log(string);

        }
        else if(e.target.innerHTML == "AC"){
            string= " ";
            document.querySelector("input").value=string;
                console.log(string)
        }
        else if(e.target == "backspace"){
            string = string+e.target.innerHTML;
            document.querySelector("input").value=string;
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})