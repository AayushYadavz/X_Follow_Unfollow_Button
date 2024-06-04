let btn = document.querySelector('#follow')
let check = 0

function updateButton(text, bgColor = "", color = "", border = "") {
    btn.innerHTML = text;
    btn.style.backgroundColor = bgColor;
    btn.style.color = color;
    btn.style.border = border;
}

btn.addEventListener('click', function(){
    if (check === 0) {
        updateButton("Following")
        check = 1
    } else {
        updateButton("Follow")
        check = 0
    }
});

btn.addEventListener('mouseover', function () {
    if (check === 1) {      
        updateButton("Unfollow", bgColor = "black", color = "red", border = "0.8px solid red")
    }
});

btn.addEventListener("mouseout", function () {
    if (check === 1) {        
        updateButton("Following")
    }
});