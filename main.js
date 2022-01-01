 let allSpan = document.querySelectorAll(".buttons span");
let result = document.querySelector(".result > span");
let theInput = document.querySelector(".the-input");

allSpan.forEach((span)=>{
    span.addEventListener("click" , (e)=>{
        if(e.target.classList.contains("check-item")){
            checkItem(); 
        }
        if(e.target.classList.contains("add-item")){
            addItem(); 
        }
        if(e.target.classList.contains("delete-item")){
            deleteItem(); 
        }
        if(e.target.classList.contains("show-items")){
            showItems(); 
        }
    })
})

function showMessage() {
        result.innerHTML =  'Input Can Not be Empty';
}
function checkItem (){
    // console.log("Check");
    if (theInput.value !== '') {

        if (localStorage.getItem(theInput.value)) {
            
            result.innerHTML   = `Found Local Item Called <span>${theInput.value}</span>`
        }
        else{
            result.innerHTML   = `Not Found Local Item Called <span>${theInput.value}</span>`
            
        }
    }
    else{
        showMessage();
    }
}
function addItem (){

    if (theInput.value !== '') {
        localStorage.setItem(theInput.value , "Test");
        result.innerHTML = `The Local Storage Item <span>${theInput.value}</span> Added`;
        
        theInput.value = '';
    }
    else{
        showMessage();
    }
}
function deleteItem (){
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value);
            
            result.innerHTML   = `Local Item Called <span>${theInput.value}</span> Deleted`;

            theInput.value = '';
        }

        else{
            result.innerHTML   = `No Local Item Called <span>${theInput.value}</span>`
            
        }   
    }
}
function showItems (){
    if (localStorage.length) {
        
        // console.log(`Found Elem ${localStorage.length}`);
        for(let [key , vlaue] of Object.entries(localStorage)){
            result.innerHTML += `<span class="keys"> ${key} </span>`
        }
    }
    else{
        result.innerHTML = `Local Storage Is Empty`;
    }
}
