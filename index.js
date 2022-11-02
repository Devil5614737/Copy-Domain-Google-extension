const btn=document.querySelector('.btn');


function Toast(){
    Toastify({
        text: "Copied to Clipboard",
        className: "info",
        garavity:'center',
      }).showToast();
}

function CopyDomainToClipboard(){
    const domain=window.location.hostname;
    navigator.clipboard.writeText(domain);
   Toast()
}


btn.addEventListener('click',()=>{
    CopyDomainToClipboard()
})


