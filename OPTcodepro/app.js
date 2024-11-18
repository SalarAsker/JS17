const textbox_list = document.querySelectorAll('.textboxes .textbox');
textbox_list[0].focus(); // put focus on the first input element


textbox_list.forEach((tbxbox, index) =>{
    // Auto tab L -> R
    tbxbox.addEventListener('input', ()=>{
        if(tbxbox.value.length == 1 && index < textbox_list.length -1){
            textbox_list[index + 1].focus();
        }
    });
    // Auto tab R -> L
    tbxbox.addEventListener('keydown', (e)=>{
        if(e.key == "Backspace" && index > 0 && tbxbox.value =="" ){
            textbox_list[index - 1].focus();
        }
    });
});

let code =  GiveFiveDigitCode();

document.querySelector('.heading h1').innerHTML = `Enter the code <span>${code}</span> and press submit`;

// submission button selection and operation
document.querySelector('.btn_submit')
.addEventListener('click', ()=>{
     let userEnterdedCode = Array.from(textbox_list).map(tbx => tbx.value).join('');
     if(code == userEnterdedCode){
        location.href = "correctcode.html";
     }else{
        window.location.reload();
     }
});


// Five digit code funtion
function GiveFiveDigitCode(){
    return Math.floor(Math.random()*90000 + 10000) ; // 10000 ..99999
}