//show hide for flex position items
document.getElementsByClassName("flex_positioner")[0].addEventListener("click", function() {
    if (document.getElementsByClassName("flex_options")[0].style.display === "none") {
        document.getElementsByClassName("flex_options")[0].style.display = "block"
    }
    else {
        document.getElementsByClassName("flex_options")[0].style.display = "none"
    }
})

//show hide for form - then //Right click show hide form
let mouseoutban = false
document.getElementById("form_left_right").addEventListener("mouseover", function () {
    if (document.getElementById("form_container").style.opacity === "1")
    document.getElementById("form_container").style.opacity = "0.4"
})
document.getElementById("form_left_right").addEventListener("mouseout", function () {
    if (mouseoutban === false) {
        document.getElementById("form_container").style.opacity = "1"
    }
})
document.getElementById("form_left_right").addEventListener("contextmenu", function () {
    if (document.getElementById("form_container").style.opacity === "0.2") {
        document.getElementById("form_container").style.opacity = "1"
        mouseoutban = false
        alreadyopen = true
        setTimeout(() => {
            alreadyopen = false
        }, 1)
    }
    else {
        document.getElementById("form_container").style.opacity = "0.2"
        mouseoutban = true
        alreadyopen = true
        setTimeout(() => {
            alreadyopen = false
        }, 1)
    }
})

//More button create and show hide
let more_button = document.createElement("button")
document.getElementById("select_container").appendChild(more_button)
more_button.id = "more_button"
more_button.innerHTML = "show more"
document.getElementById("more_button").addEventListener('click', function() {
    console.log("MORE CLICKED")
    if (document.getElementById("more_select_container").style.display === "flex") {
        document.getElementById("more_select_container").style.display = "none"
        document.getElementById("more_button").innerHTML = "show more"
    }
    else {
        document.getElementById("more_select_container").style.display = "flex"
        document.getElementById("more_button").innerHTML = "show less"
    }
})