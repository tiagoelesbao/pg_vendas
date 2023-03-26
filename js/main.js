const enviarIcon = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4293 11.5H5.16504" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.02169 3.47557L19.0116 10.4687C19.4023 10.664 19.6491 11.0632 19.6491 11.5C19.6491 11.9368 19.4023 12.3361 19.0116 12.5313L5.02169 19.5245C4.6163 19.7272 4.12973 19.6737 3.77811 19.3877C3.42649 19.1017 3.27501 18.6362 3.39096 18.198L5.16507 11.5L3.39096 4.80204C3.27501 4.36386 3.42649 3.89839 3.77811 3.61237C4.12973 3.32635 4.6163 3.27283 5.02169 3.47557Z" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

//VE
const emailVE = document.querySelector(".email-ve")
const submitVE = document.querySelector(".btn-submit-ve")

if (emailVE) {
    emailVE.addEventListener("focus", function(){
        submitVE.innerHTML = enviarIcon
        submitVE.classList.add("svg-ativo");
    })      
}

var modalConfirmacao = new bootstrap.Modal(document.getElementById('modalConfirmacao'))

////VE
if(submitVE){
    submitVE.addEventListener("click", function(event){
        event.preventDefault()
        if(!submitVE.classList.contains("disabled")){
            let email = document.querySelector(".email-prepopulado")
            email.value = emailVE.value
            modalConfirmacao.show()
        } else {
            //nada
        }
    })
}