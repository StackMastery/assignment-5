// element Selector
const homeBtn = document.getElementById('homeBtn')
const accordings = document.querySelectorAll('#accordings')
const callActive = document.querySelectorAll('#callActive')

homeBtn.addEventListener("click", function(){
    window.location.href = '/assignment-5'
})

accordings.forEach((item, index) =>{
    callActive[index].addEventListener("click", function(){
        accordings[index].classList.toggle('activeAccording')
    })
})
