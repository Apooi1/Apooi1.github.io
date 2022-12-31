//var socket = io()
// cool gray #d8d8d8;

let id_tracker = 0
let selected_element_4form = ""
let the_selected_element
let unused_hex = "#000001"  //prevent default color from submitting
let vislock_creation = 1      //lock for +button visability

//rgb to hex function for colors
//match searches for certain elements
//toString(16) changes the element into hexidecimal and once goes over 9 starts at A.. B.. C etc, slice removes 2 elements, join() reattachs the results of R, G and B
const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`


//+ button and selection container container
let button_and_container = document.createElement("button")
document.body.appendChild(button_and_container)
button_and_container.id = "button_and_container"
draggable(button_and_container)
  
 //+ button
let create_new = document.createElement('button')
document.getElementById("button_and_container").appendChild(create_new)
create_new.innerHTML = "+"
create_new.id = "create"

//+ button click
create_new.addEventListener('click', function() {
if (vislock_creation === 1) {
visswitch_create_button()
}
})

// Triggers when children are clicked (create item)
button_and_container.addEventListener('click', function(){
if (vislock_creation === 0) {
visswitch_create_button()
}
})

//Switches visability for creation menu
function visswitch_create_button() {
if(document.getElementById("select_container").style.display != "none") { document.getElementById("select_container").style.display = "none";
document.getElementById('create').innerHTML = " + "
}
else{ 
document.getElementById("select_container").style.display = "flex";
document.getElementById('create').innerHTML = " - "
}
}


//Container for creation buttons
let select_container = document.createElement("container")
document.getElementById("button_and_container").appendChild(select_container)
select_container.id = "select_container"
select_container.addEventListener("mousedown", function (s){
  s.stopPropagation();
})



//Button creation button to create buttons
let button_create_button = document.createElement('button')
document.getElementById('select_container').appendChild(button_create_button)
button_create_button.innerHTML = "Create Button"
button_create_button.id = "button_create_button"

//Create: button
button_create_button.addEventListener('click', function(){
  let created_button = document.createElement('button')
  document.body.appendChild(created_button)
  created_button.innerHTML = "Button here"
  created_button.style.left = "40%"
  created_button.style.display = "flex"
  created_button.style.position = "absolute"
  created_button.id = id_tracker += 1
  draggable(created_button)

//Button: click
created_button.addEventListener('click', function(v) {
v.stopPropagation();
selector(created_button)
})
})


//Input creation button to create Inputs
let input_create_button = document.createElement("button")
document.getElementById("select_container").appendChild(input_create_button)
input_create_button.innerHTML = "User Input"
input_create_button.id = "input_create_button"

  
//+button select on press
//Create: Input
document.getElementById("input_create_button").addEventListener('click', function(){
  let created_input = document.createElement("INPUT")
  document.body.appendChild(created_input)
  created_input.value = "INPUTED"
  created_input.id = id_tracker += 1
  created_input.className = "created_input_class"
  draggable(created_input)

//Input click
created_input.addEventListener('click', function() {
selector(created_input)
})
})


//Text area creation button to create textareas
let textarea_create_button = document.createElement("button")
document.getElementById("select_container").appendChild(textarea_create_button)
textarea_create_button.innerHTML = "Text Area"
textarea_create_button.id = "textarea_create_button"

  
//Create: Text Area
document.getElementById("textarea_create_button").addEventListener('click', function(){
  let created_textarea = document.createElement("TEXTAREA")
  document.body.appendChild(created_textarea)
  created_textarea.value = "Write your text here..."
  created_textarea.id = id_tracker += 1
  created_textarea.className = "created_textarea_class"
  draggable(created_textarea)

//Text Area click
created_textarea.addEventListener('click', function() {
selector(created_textarea)
})
})


//Image creation button to create images
let img_create_button = document.createElement('button')
document.getElementById('select_container').appendChild(img_create_button)
img_create_button.innerHTML = "Image"
img_create_button.id = "img_create_button"

//Create: img
img_create_button.addEventListener('click', function(){
  let created_img = document.createElement('IMG')
  document.body.appendChild(created_img)
  created_img.innerHTML = "HOLY TRINITY"
  created_img.style.height = 150;
  created_img.style.width = 150;
  created_img.src = "test"
  created_img.id = id_tracker += 1
  draggable(created_img)

//img: click
created_img.addEventListener('click', function() {
selector(created_img)
})
})
                                   

//Container creation button to create containers
let container_create_button = document.createElement('button')
document.getElementById('select_container').appendChild(container_create_button)
container_create_button.innerHTML = "Container / Div"
container_create_button.id = "container_create_button"
  
//Create: container
container_create_button.addEventListener('click', function(){
  let created_container = document.createElement('div')
  document.body.appendChild(created_container)
  created_container.style.left = "40%"
  created_container.style.height = 150;
  created_container.style.width = 150;
  created_container.style.borderStyle = "solid"
  created_container.style.borderWidth = "1"
  created_container.style.display = "flex"
  created_container.id = id_tracker += 1
  draggable(created_container)

//Container: click
created_container.addEventListener('click', function(s) {
s.stopPropagation();
selector(created_container)
})
})

//Container: select body
document.body.id = "body"
document.body.style.zIndex = "-999"
let body_select = document.createElement('button')
document.getElementById('select_container').appendChild(body_select)
body_select.style.position = "relative"
body_select.innerHTML = "Select Background"
body_select.id = "body_select"
//body select click
body_select.addEventListener('click', function(){
  selector(document.body)
})

  
//Find ID of selected element
function selector(selected_element){
  console.log (selected_element.id)
  selected_element_4form = selected_element.id
  the_selected_element = selected_element
  console.log(selected_element_4form)
draggable(selected_element)
form_update()  
}
  

//display values in form on click
//ID
function form_update(){

  document.getElementById("form_id").value = document.getElementById(selected_element_4form).id
//Display
document.getElementById("display_input").value = document.getElementById(selected_element_4form).style.display
//X
p = document.getElementById("x_input").value = document.getElementById(selected_element_4form).style.top
//Y
document.getElementById("y_input").value = document.getElementById(selected_element_4form).style.left
//height
document.getElementById("height_input").value = document.getElementById(selected_element_4form).style.height
//width
document.getElementById("width_input").value = document.getElementById(selected_element_4form).style.width
//background color (uses rgb2hex function)
//checks if there is not a color property, set color to unused hex
//Then checks if there is a color property before allowed to run to prevent null error
if(!document.getElementById(selected_element_4form).style.backgroundColor) {
document.getElementById("background_color").value = unused_hex
}
if(document.getElementById(selected_element_4form).style.backgroundColor) {
document.getElementById('background_color').value = rgb2hex(document.getElementById(selected_element_4form).style.backgroundColor)
}
//color (uses rgb2hex function)
if(!document.getElementById(selected_element_4form).style.color) {
  document.getElementById("color_input").value = unused_hex
}
if(document.getElementById(selected_element_4form).style.backgroundColor) {
document.getElementById('color_input').value = rgb2hex(document.getElementById(selected_element_4form).style.color)
}
//Text
console.log (selected_element_4form)
if (selected_element_4form != "body") {
document.getElementById("text_input").value = document.getElementById(selected_element_4form).innerHTML
}
//Place holder
document.getElementById("placeholder_input").value = document.getElementById(selected_element_4form).placeholder
//Border style
document.getElementById("border_style").value = document.getElementById(selected_element_4form).style.borderStyle
//Border width
document.getElementById("border_width").value = document.getElementById(selected_element_4form).style.borderWidth
//Border color
if(!document.getElementById(selected_element_4form).style.borderColor) {
document.getElementById("border_color").value = unused_hex
}
if(document.getElementById(selected_element_4form).style.borderColor) {
document.getElementById('border_color').value = rgb2hex(document.getElementById(selected_element_4form).style.border_color)
}
//Margin
document.getElementById("margin_input").value = document.getElementById(selected_element_4form).style.margin
//Padding
document.getElementById("padding_input").value = document.getElementById(selected_element_4form).style.padding
//Parent
document.getElementById("parent_input").value = document.getElementById(selected_element_4form).parentElement.id
//Image src
document.getElementById("img_src").value = document.getElementById(selected_element_4form).src

  }  //NO REMOVE



  //Button: Dragend handler
function draggable(selected){
  if (selected != document.body) {
  selected.addEventListener("mousedown", mousedown)
  function mousedown() {
    selected.style.position = 'absolute'
    document.addEventListener("mousemove", mousemover)
    function mousemover() {
      selected.style.left = event.clientX - selected.offsetWidth / 2 + "px"
      selected.style.top = event.clientY - selected.offsetHeight / 2 + "px"
      //console.log (event.clientX, event.clientY)
    }
  selected.addEventListener("mouseup", mouseup)
    function mouseup() {
    document.removeEventListener("mousemove", mousemover)
    document.removeEventListener("mousedown", mousedown)
    if (selected.style.id != "create") {
    //selected.style.position = initial_pos
    }
  }
  }
  }
}
  

//Triggers on submit
//loops through all input classes and adds event listeners to change, on change, submits
let inputs_all_classes = document.getElementsByClassName("myinputs")
for (let x = 0; x < inputs_all_classes.length; x++) {
  inputs_all_classes[x].addEventListener ('change', inputs_change)
}
//Makes form submit not do anything, need to refactor and delete this
document.getElementById('form').addEventListener('submit', function(q){
  q.preventDefault()
})

function inputs_change() {
//ID submit
  document.getElementById(selected_element_4form).id = document.getElementById("form_id").value
//Display submit
document.getElementById(selected_element_4form).style.display = document.getElementById("display_input").value
console.log(document.getElementById(selected_element_4form).style.display)
//x submit
document.getElementById(selected_element_4form).style.top = document.getElementById("x_input").value
//y submit
document.getElementById(selected_element_4form).style.left = document.getElementById("y_input").value
//Height submit
document.getElementById(selected_element_4form).style.height = document.getElementById("height_input").value
//width submit
document.getElementById(selected_element_4form).style.width = document.getElementById("width_input").value
//Background color submit
//if statment to prevent default color from submitting
if (document.getElementById("background_color").value != unused_hex) {
document.getElementById(selected_element_4form).style.backgroundColor = document.getElementById('background_color').value
}
//color submit
document.getElementById(selected_element_4form).style.color = document.getElementById('color_input').value
//Text submit
if (selected_element_4form != "body") {
document.getElementById(selected_element_4form).innerHTML = document.getElementById('text_input').value
}
//Place holder submit
document.getElementById(selected_element_4form).placeholder = document.getElementById('placeholder_input').value
//Border style submit
document.getElementById(selected_element_4form).style.borderStyle = document.getElementById('border_style').value
//Border width submit
document.getElementById(selected_element_4form).style.borderWidth = document.getElementById('border_width').value
//Border color submit
if (document.getElementById("border_color").value != unused_hex) { document.getElementById(selected_element_4form).style.borderColor = document.getElementById('border_color').value }
//Margin submit
document.getElementById(selected_element_4form).style.margin = document.getElementById('margin_input').value
//Padding submit
document.getElementById(selected_element_4form).style.padding = document.getElementById('padding_input').value
//parent input submit
let parent_id = document.getElementById("parent_input").value
let child_id = document.getElementById(selected_element_4form)
if (parent_id != "") {
document.getElementById(parent_id).appendChild(child_id)
//sets position from absolute to initial
let initial_pos = the_selected_element.style.position
if (initial_pos === "absolute") {
  the_selected_element.style.position = "initial"
}

}
//img src submit
document.getElementById(selected_element_4form).src = document.getElementById('img_src').value
//img checkbox natural height / width 
if (document.getElementById('img_checkbox').checked) { 
  document.getElementById(selected_element_4form).style.height = document.getElementById(selected_element_4form).naturalHeight;
  document.getElementById(selected_element_4form).style.width = document.getElementById(selected_element_4form).naturalWidth;
}
  
// }) //NO REMOVE
}


//Moves form left to right
document.getElementById('form_left_right').addEventListener('click', function(){
  if(document.getElementById('form').style.left == 0) {
  document.getElementById('form').style.right = null
  document.getElementById('form').style.left = 0
  document.getElementById('form_left_right').style.right = null
  document.getElementById('form_left_right').style.left = 0
  }

  else {
    document.getElementById('form').style.left = null
    document.getElementById('form').style.right = 0
  document.getElementById('form_left_right').style.left = null
  document.getElementById('form_left_right').style.right = 0
  }
  
})


//Border style select visswitch
document.getElementById('border_style').addEventListener('focus', function(){
  console.log('selected')
document.getElementById('border_style_select').style.display = "block"

document.getElementById('border_style_select').addEventListener('blur', function(){ document.getElementById('border_style_select').style.display = "none"
})
})
//update border style form when its selector is changed
document.getElementById("border_style_select").addEventListener("change", function(){
  document.getElementById('border_style').value = document.getElementById('border_style_select').value
})

//display input select visswitch
document.getElementById('display_input').addEventListener('focus', function(){
  console.log('selected')
document.getElementById('display_select').style.display = "block"

document.getElementById('display_select').addEventListener('blur', function(){ document.getElementById('display_select').style.display = "none"
})
})
//update border style form when its selector is changed
document.getElementById("display_select").addEventListener("change", function(){
  document.getElementById('display_input').value = document.getElementById('display_select').value
})

  
//vislock checkbox for creation menu (create item)
let vislock_create = document.createElement("INPUT")
vislock_create.type = "checkbox"
document.getElementById("select_container").appendChild(vislock_create)
vislock_create.checked = true
vislock_create.id = "vislock_create"

vislock_create.addEventListener('click', function(){
  if (vislock_create.checked) {
    vislock_creation = 1
  }
  else {
    vislock_creation = 0
  }
})

  
//Submission button
let submission_btn = document.createElement('button')
document.getElementById('form').appendChild(submission_btn)
submission_btn.innerHTML = "Subsmit"
submission_btn.id = "submission_btn"


//console.log(document.documentElement.outerHTML)




  
//output and counter text areas container
let output_and_counter = document.createElement("div")
document.body.appendChild(output_and_counter)
output_and_counter.id = "output_and_counter"

//Output text area
let output = document.createElement("TextArea")
document.getElementById("output_and_counter").appendChild(output)
output.spellcheck = false
output.id = "output"

//Line counter output text area
let line_counter = document.createElement("TextArea")
document.getElementById("output_and_counter").appendChild(line_counter)
line_counter.readOnly = true
line_counter.id = "line_counter"

  
//update button
let output_updater = document.createElement('button')
document.getElementById("output_and_counter").appendChild(output_updater)
output_updater.innerHTML = "OUTPUT"
output_updater.id = "output_updater"


//update button click
output_updater.addEventListener("click", function(){

//Outputs document to output textarea including own code
output.value = document.documentElement.innerHTML
//Cuts code into many pieces
var lines = output.value.split('\n')
console.log(lines.length)

//Resets output value
output.value = ""
  
//removes the first 600 or so pieces, and joins it back together in a for loop by adding new line after each piece
let bodyhtml = lines[4]
  console.log(bodyhtml)
lines.splice(0, 30)  //script tag +1 in html
let merged_output = []
for (y = 1; y < lines.length; y++) {
  //console.log (lines[y])
  merged_output[y] = lines[y]
}
output.value = bodyhtml + "\n" + merged_output.join('\n')
output.value = output.value.replace('</body>', "")
//Measures number of lines in output
var new_lines = output.value.split('\n').length
//Reset line counter textarea (not line count)
  line_counter.value = ""
  
//Loops to write numbers 1 - ?? in line counter textarea
  for (var x = 1; x < new_lines; x++) {
    //console.log (x)
    line_counter.value += x + "." + "\n"
  }
})



  
//output textarea scroll match with line counter
document.getElementById("output").addEventListener("scroll", function(){
  line_counter.scrollTop = output.scrollTop
})
document.getElementById("line_counter").addEventListener("scroll", function(){
  output.scrollTop = line_counter.scrollTop 
})


//Open in new tab button
let new_tab_btn = document.createElement("button")
document.getElementById('output_and_counter').appendChild(new_tab_btn)
new_tab_btn.innerHTML = "Open in tab"
new_tab_btn.style.right = 72
new_tab_btn.id = "new_tab_btn"
//Open in new tab button CLICK
document.getElementById('new_tab_btn').addEventListener('click', function(){
let win = window.open()
  win.document.getElementsByTagName('html')[0].remove()
//let element = document.createElement('body')
  let element = document.createElement('html')
element.type = "text/javascript"
element.innerHTML = document.getElementById('output').value
setTimeout(function(){
  win.document.append(element)
}, 1000)
  
})

  
//Output visswitcher hide button
let output_visswitch = document.createElement('button')
document.body.appendChild(output_visswitch)
output_visswitch.innerHTML = "Hide"
output_visswitch.style.left = 'calc(65% - 250px)'
output_visswitch.id = "output_visswitch"

 //Output visswitcher hide button click
  document.getElementById("output_visswitch").addEventListener('click', function() {
    if (document.getElementById("output_and_counter").style.display != "none") {  document.getElementById("output_and_counter").style.display = "none"
output_visswitch.style.bottom = 0
output_visswitch.innerHTML = "Output"
    }
      
else { document.getElementById("output_and_counter").style.display = "flex"
output_visswitch.style.bottom = 200
output_visswitch.innerHTML = "Hide"
}
})

  
 //Import mode button
let import_button = document.createElement('button')
document.getElementById("output_and_counter").appendChild(import_button)
import_button.innerHTML = "Import"
import_button.style.left = -50
import_button.style.bottom = 0
import_button.id = "import_button"

document.getElementById("import_button").addEventListener('click', function(){
  alert("Not yet implemented.")
})

  



  
let img_og_size_checker_label = document.createElement("LABEL")
document.getElementById('form').appendChild(img_og_size_checker_label)
img_og_size_checker_label.innerHTML = "Original size?"
//onmousemove = function(e){
  //console.log("mouse location:", e.clientX, e.clientY)
//}
  
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
  console.log(screenWidth, screenHeight)

