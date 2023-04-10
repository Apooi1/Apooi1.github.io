//show hide for flex position items
document.getElementsByClassName("flex_positioner")[0].addEventListener("click", function() {
    if (document.getElementsByClassName("flex_options")[0].style.display === "none") {
        document.getElementsByClassName("flex_options")[0].style.display = "block"
    }
    else {
        document.getElementsByClassName("flex_options")[0].style.display = "none"
    }
})