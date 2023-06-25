const textareaEl = document.getElementById("input");
const totalCounterEl = document.getElementById("total-counter");
const remaningCounterEl = document.getElementById("remaning-counter");
textareaEl.addEventListener("keyup",()=>{
    updateCounter()
});
function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remaningCounterEl.innerText = textareaEl.getAttribute("maxLength")-totalCounterEl.innerText;
}