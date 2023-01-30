let id_tracker = 0
let selected_element_4form = ""
let the_selected_element
let unused_hex = "#000001"  //prevent default color from submitting
let vislock_creation = 1      //lock for +button visability
let potential_hover = ""
let matches

let border_tracker = []
let font_array = []

// let param_array = ["style.display", "style.flexDirection", "style.justifyContent", "style.alignContent", "style.alignItems", "style.flexWrap", "style.top", "style.left", "style.bottom", "style.right",
// "style.height", "style.width", "placeholder", "style.borderStyle", "style.borderWidth", "style.borderRadius", "style.margin", "style.padding", "style.position", "style.fontFamily"
// , "style.fontSize", "style.fontWeight", "style.fontStyle", "style.lineHeight"]

let cssparm_array = ["display", "flex-direction", "justify-content", "align-content", "align-items", "flex-wrap", "top",
 "left", "bottom", "right", "height", "width", "placeholder", "border-style", "border-width", "border-radius", "margin",
  "padding", "position", "font-family", "font-size", "font-weight", "font-style", "line-height", "background-color", 
  "color", "row-gap", "column-gap", "border-color"]

// let input_array = ["display_input", "flex_direction", "justify_content", "align_content", "align_items", "flex_wrap",
// "x_input", "y_input", "bottom_input", "right_input", "height_input", "width_input", "placeholder_input", "border_style", "border_width", "border_radius",
// "margin_input", "padding_input", "position_input", "fontfamily_input", "fontsize_input", "fontweight_input", "fontstyle_input"
// , "lineheight_input"]

let cssinput_array = ["display_input", "flex_direction", "justify_content", "align_content", "align_items", "flex_wrap",
"x_input", "y_input", "bottom_input", "right_input", "height_input", "width_input", "placeholder_input", "border_style",
 "border_width", "border_radius", "margin_input", "padding_input", "position_input", "fontfamily_input", "fontsize_input",
  "fontweight_input", "fontstyle_input", "lineheight_input", "background_color", "color_input", "flex_gap_row",
   "flex_gap_column", "border_color"]

//rgb to hex function for colors
//match searches for certain elements
//toString(16) changes the element into hexidecimal and once goes over 9 starts at A.. B.. C etc, slice removes 2 elements, join() reattachs the results of R, G and B
const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`


//+ button and selection container container
let button_and_container = document.createElement("button")
document.body.appendChild(button_and_container)
button_and_container.id = "button_and_container"
//draggable(button_and_container)
  
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
  // created_button.style.left = "40%"
  // created_button.style.display = "flex"
  // created_button.style.position = "absolute"
  id_tracker+= 1
  created_button.id = "btn" + id_tracker
  selector(created_button)
  clear()
  document.getElementById('x_input').value = "40%"
  document.getElementById('display_input').value = "flex"
  inputs_change()
  form_update()
  draggable(created_button)
})
//Button: click
// created_button.addEventListener('click', function(v) {
// v.stopPropagation();
// selector(created_button)
// })
// })


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
  id_tracker +=1
  created_input.id = created_input.nodeName + id_tracker
  selector(created_input)
  clear()
  
  inputs_change()
  form_update()
  draggable(created_input)
})

//Input click
// created_input.addEventListener('click', function() {
// selector(created_input)
// })
// })


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
  id_tracker += 1
  created_textarea.id = created_textarea.nodeName + id_tracker
  //created_textarea.className = "created_textarea_class"
  selector(created_textarea)
  clear()
  document.getElementById('height_input').value = "120px"
  document.getElementById('width_input').value = "300px"
  inputs_change()
  form_update()
  draggable(created_textarea)
})

//Text Area click
// created_textarea.addEventListener('click', function() {
// selector(created_textarea)
// })
// })


//Image creation button to create images
let img_create_button = document.createElement('button')
document.getElementById('select_container').appendChild(img_create_button)
img_create_button.innerHTML = "Image"
img_create_button.id = "img_create_button"

//Create: img
img_create_button.addEventListener('click', function(){
  let created_img = document.createElement('IMG')
  document.body.appendChild(created_img)
  id_tracker += 1
  created_img.id = created_img.nodeName + id_tracker
  selector(created_img)
  clear()
  document.getElementById('width_input').value = "150px"
  document.getElementById('height_input').value = "150px"
  document.getElementById('img_src').value = "test"

  inputs_change()
  form_update()
  draggable(created_img)
})
//img: click
// created_img.addEventListener('click', function() {
// selector(created_img)
// })
// })
                                   

//Container creation button to create containers
let container_create_button = document.createElement('button')
document.getElementById('select_container').appendChild(container_create_button)
container_create_button.innerHTML = "Container / Div"
container_create_button.id = "container_create_button"
  
//Create: container
container_create_button.addEventListener('click', function(){
  let created_container = document.createElement('div')
  document.body.appendChild(created_container)
  //created_container.style.left = "40%"
  //created_container.style.width = "100%"
  //created_container.style.borderStyle = "solid"
  // created_container.style.borderWidth = "1"
  // created_container.style.display = "flex"
  // created_container.style.padding = "2%"
  id_tracker += 1
  created_container.id = "div" + id_tracker
  border_tracker.push(created_container)
  selector(created_container)
  clear()
  document.getElementById('width_input').value = "100%"
  document.getElementById('border_style').value = "solid"
  document.getElementById('border_width').value = "1px"
  document.getElementById('padding_input').value = "30px"
  inputs_change()
  form_update()
  draggable(created_container)

//Container: click
// created_container.addEventListener('click', function(s) {
// s.stopPropagation();
// selector(created_container)
// })
})

document.body.id = "body"
let body_select = document.createElement('button')
document.getElementById('select_container').appendChild(body_select)
body_select.style.position = "relative"
body_select.innerHTML = "Select Background"
body_select.id = "body_select"
//body select click
body_select.addEventListener('click', function(){
  selector(document.body)
})


//------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SELECTOR<<<<<<<<<<<<<<<<<<<<<<<<<--------------------------------
//Find ID of selected element
function selector(selected_element){
  selected_element_4form = selected_element.id
  the_selected_element = selected_element
  console.log(selected_element_4form)
draggable(selected_element)
selected_element.addEventListener('click', function(q) {
  selected_element_4form = q.target.id
form_update()
})
form_update()
}
  


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&~~CSS UPDATER~~&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//display values in form on click
//ID
function form_update(){
  clear()

    //Grabs all ";"s for input_change()
    matches = Array.from(document.getElementById('stylecss').textContent.matchAll(/\n/g))

  let stylecss = document.getElementById('stylecss').textContent
  let first_index = stylecss.indexOf("#" + document.getElementById(selected_element_4form).id + potential_hover)
  let last_index = stylecss.indexOf("}", first_index)
  let selectedcss = stylecss.substring(first_index, last_index+1)
  //alternative ... before stylecss instead of Array.from
  //matches = Array.from(stylecss.matchAll(/;/g))
  //complicated af string minipulation
  let oldmatch
  if (matches) {
   matches.forEach((match) => {
    if (match.index > first_index && match.index < last_index) {
    if (oldmatch) {
    let value = stylecss.substring(oldmatch.index, match.index)
    value = value.replaceAll(" ", "")
    let divide13 = value.indexOf (':')
    let cssproperty = value.substring(1, divide13)
    let cssparm = value.substring(divide13+1, value.length-1)
    let indexofproperty = cssparm_array.indexOf(cssproperty)
    //Finally
    console.log(value + "TJE VA:UE")
    console.log(oldmatch.index + " wtf " + match.index)
    console.log(cssproperty)
    document.getElementById(cssinput_array[indexofproperty]).value = cssparm
  
    }
    if (oldmatch != match) {
    oldmatch = match
    }
  }
  })
}

//ID
console.log(selected_element_4form+ "THE HOLY ELEMENT")
document.getElementById("form_id").value = document.getElementById(selected_element_4form).id
//background color (uses rgb2hex function)
//checks if there is not a color property, set color to unused hex
//Then checks if there is a color property before allowed to run to prevent null error
// if(!document.getElementById(selected_element_4form).style.backgroundColor) {
// document.getElementById("background_color").value = unused_hex
// }
// if(document.getElementById(selected_element_4form).style.backgroundColor) {
// document.getElementById('background_color').value = rgb2hex(document.getElementById(selected_element_4form).style.backgroundColor)
// }
// //color (uses rgb2hex function)
// if(!document.getElementById(selected_element_4form).style.color) {
//   document.getElementById("color_input").value = unused_hex
// }
// if(document.getElementById(selected_element_4form).style.backgroundColor) {
// document.getElementById('color_input').value = rgb2hex(document.getElementById(selected_element_4form).style.color)
// }
//Text
if (selected_element_4form != "body") {
document.getElementById("text_input").value = document.getElementById(selected_element_4form).innerHTML
}
// //Border color !!used to be important
// if(!document.getElementById(selected_element_4form).style.borderColor) {
// document.getElementById("border_color").value = unused_hex
// }
// if(document.getElementById(selected_element_4form).style.borderColor) {
// document.getElementById('border_color').value = rgb2hex(document.getElementById(selected_element_4form).style.border_color)
// }
//Parent
document.getElementById("parent_input").value = document.getElementById(selected_element_4form).parentElement.id
//Image src
document.getElementById("img_src").value = document.getElementById(selected_element_4form).src

let coloree_classes = document.getElementsByClassName('coloree')
for (let x = 0; x < coloree_classes.length; x++) {
  document.getElementsByClassName('colorers')[x].value = document.getElementsByClassName('coloree')[x].value
}
  }  //NO REMOVE


  function clear() {
    for (let x = 0; x < cssinput_array.length; x++) {
      update_total = "document.getElementById(\"" + cssinput_array[x] + "\").value = \"\"" //document.getElementById(selected_element_4form)." + param_array[x]
      updateresult = Function(update_total)() 
    }
    //document.getElementById("form_id").value = ""
    document.getElementById("background_color").value = "#000001"
  }


    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>--DRAG HANDLER--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  let mousedown_triggered = false
  let drag_select = null
function draggable(selected){
  if (selected != document.body) {
  selected.addEventListener("mousedown", mousedown)
  function mousedown(q) {
    if (q.buttons != 1) {
      return
    }
      mousedown_triggered = true
        drag_select = q.target.id
      
    console.log ("selected is " + drag_select)
    let node = document.getElementById(drag_select)
    let clone = node.cloneNode()
    document.body.appendChild(clone)
    clone.style.position = "absolute"
    clone.style.display = "none"
      
    document.addEventListener("mousemove", mousemover)
    function mousemover(q) {
      drag_target = q.target.id
      // let rect = selected.parentNode.getBoundingClientRect();
      // let lefter = event.clientX - rect.left
      // let toper = event.clientY - rect.top
      // selected.style.left = lefter + "px"
      // selected.style.top = toper + "px"
      document.getElementById("mouse_tooltip").innerHTML = drag_select + " child of " + drag_target + "?"
      
      clone.style.display = "block"   //needs only once
      clone.style.opacity = 0.2
      clone.style.top = event.clientY + 10 + "px"
      clone.style.left = event.clientX + 10 + "px"
    }
  
  document.addEventListener("mouseup", mouseup)
    function mouseup(q) {
      q.preventDefault()
      clone.remove()
      console.log("target is " + drag_target)
      if (drag_target != drag_select && drag_select != null && drag_target != null) {
      document.getElementById(drag_target).appendChild(document.getElementById(drag_select))
      }

    document.removeEventListener("mousemove", mousemover)
    mousedown_triggered = false
    drag_select = null
    drag_target = null
    //document.removeEventListener("mousedown", mousedown)
    }
  }
}
}
  
//colors to input fields
let colorers_all_classes = document.getElementsByClassName("colorers")
let colorers_array = []
for (x = 0; x < colorers_all_classes.length; x++) {
  colorers_array.push(colorers_all_classes[x])
  document.getElementsByClassName("colorers")[x].addEventListener("change", function() {
    console.log(colorers_array.indexOf(this))
    //console.log(document.getElementsByClassName("colorers")[3])
    document.getElementsByClassName("coloree")[colorers_array.indexOf(this)].value = this.value
  })
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!>> INPUT SUBMITTER <<!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Triggers on submit
//loops through all input classes and adds event listeners to change, on change, submits
let inputs_all_classes = document.getElementsByClassName("myinputs")
for (let x = 0; x < inputs_all_classes.length; x++) {
  inputs_all_classes[x].addEventListener ('change', inputs_change)
}

function inputs_change() {
  // for (let x = 0; x < input_array.length; x++) {
  //   total = "document.getElementById(selected_element_4form)." + param_array[x] + " = document.getElementById(\"" + input_array[x] + "\").value"
  //   //console.log (total)
  //   outresult = Function(total)()
  //   //console.log (outresult) 
  // }

  if (btn_hover_selected === "btn_standard") {
    potential_hover = ""
  }
  else if (btn_hover_selected === "btn_active") {
    potential_hover = ":active"
  }
  else if (btn_hover_selected === "btn_hover") {
    potential_hover = ":hover"
  }
  let cssline = "#" + document.getElementById(selected_element_4form).id + potential_hover  +" {" + "\n"
  for (let i = 0; i < cssinput_array.length; i++) {
    if (document.getElementById(cssinput_array[i]).value != "" && document.getElementById(cssinput_array[i]).value != "#000001") {
    cssline +=  cssparm_array[i] + ":" + document.getElementById(cssinput_array[i]).value + ";" + "\n"
    }
  }

  cssline += "}"
 
  let css_output = document.createTextNode(cssline)
  let stylecss = document.getElementById('stylecss').textContent
  let first_index = stylecss.indexOf("#" + document.getElementById(selected_element_4form).id + potential_hover)
  let last_index = stylecss.indexOf("}", first_index)
  console.log (first_index)
  console.log (last_index)
  //Deletes the css code
  if (first_index != -1) {
    document.getElementById('stylecss').textContent = stylecss.replace(stylecss.substring(first_index, last_index+1), cssline)
    //console.log(css_output.textContent, cssline)
  }
  //Then rebinds the new one
  if (first_index === -1) {
    //document.getElementById('stylecss').appendChild(css_default)
  document.getElementById('stylecss').appendChild(css_output)
  }


  


//ID submit
   document.getElementById(selected_element_4form).id = document.getElementById("form_id").value

//Background color submit
//if statment to prevent default color from submitting
/* NEEDED?!
if (document.getElementById("background_color").value != unused_hex) {
document.getElementById(selected_element_4form).style.backgroundColor = document.getElementById('background_color').value
}
//color submit
document.getElementById(selected_element_4form).style.color = document.getElementById('color_input').value
*/
//Text submit
if (selected_element_4form != "body") {
  console.log(selected_element_4form + "IS IT ACTUALLY NULL?")
document.getElementById(selected_element_4form).innerHTML = document.getElementById('text_input').value
}
// //Border color submit
/* NEEDED?
if (document.getElementById("border_color").value != unused_hex) { document.getElementById(selected_element_4form).style.borderColor = document.getElementById('border_color').value }
*/
//parent input submit
let parent_id = document.getElementById("parent_input").value
let child_id = document.getElementById(selected_element_4form)
if (parent_id != "" && parent_id != child_id.parentNode.id) {
  console.log (child_id.parentNode.id)
document.getElementById(parent_id).appendChild(child_id)
}
//sets position from absolute to initial
if (parent_id === child_id.parentElement.id && child_id.parentElement.id != "body") {
  console.log('set')
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


//Moves form left to right
document.getElementById('form_left_right').addEventListener('click', function(){
  if(document.getElementById('form_container').style.left == 0) {
  document.getElementById('form_container').style.right = null
  document.getElementById('form_container').style.left = 0
  document.getElementById('form_left_right').style.right = null
  document.getElementById('form_left_right').style.left = 0
  }

  else {
    document.getElementById('form_container').style.left = null
    document.getElementById('form_container').style.right = 0
  document.getElementById('form_left_right').style.left = null
  document.getElementById('form_left_right').style.right = 0
  }
  
})


//Input drop downs visability switcher
let select_parents = document.getElementsByClassName("select_parents")
for (let x = 0; x < select_parents.length; x++) {
  document.getElementsByClassName("select_parents")[x].addEventListener('focus', function() {
    document.getElementsByClassName('select_child')[x].style.display = "block"
  })

  document.getElementsByClassName("select_child")[x].addEventListener('blur', function() {
    document.getElementsByClassName('select_child')[x].style.display = "none"
  })

  document.getElementsByClassName("select_child")[x].addEventListener('change', function() {
    document.getElementsByClassName('select_parents')[x].value = document.getElementsByClassName("select_child")[x].value
    inputs_change()
  })

}





  
//output and counter text areas container
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



//update button click
document.getElementById('output_updater').addEventListener("click", function(){
//Outputs document to output textarea including own code
output.value = document.documentElement.innerHTML
//Cuts code into many pieces
var lines = output.value.split('\n')
console.log(lines.length)
//number of lines of style so it can be deducted
let csslines = document.getElementById('stylecss').textContent.split('\n').length
console.log(csslines)

//Resets output value
output.value = ""
  
//removes the first 200 or so pieces, and joins it back together in a for loop by adding new line after each piece
let bodyhtml = lines[7]
  console.log(bodyhtml)
lines.splice(0, 202 + csslines)  //script tag +1 in html and remove stylecss
let merged_output = []
for (y = 1; y < lines.length; y++) {
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
    line_counter.value += x + "." + "\n"
  }

  //output to stylecss textcontent from stylesheet
  document.getElementById("css_output").value = document.getElementById('stylecss').textContent
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
output_visswitch.innerHTML = "output"
output_visswitch.style.left = 'calc(65% - 250px)'
output_visswitch.id = "output_visswitch"
document.getElementById("output_and_counter").style.display = "none"
 //Output visswitcher hide button click
  document.getElementById("output_visswitch").addEventListener('click', function() {
    if (document.getElementById("output_and_counter").style.display === "none") {
      document.getElementById("output_and_counter").style.display = "flex"
output_visswitch.style.bottom = 200
output_visswitch.innerHTML = "hide"
    }    
else { 
  document.getElementById("output_and_counter").style.display = "none"
output_visswitch.style.bottom = 0
output_visswitch.innerHTML = "output"
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
  document.getElementById("stylecss").textContent = document.getElementById("css_output").value
  inputs_change()

  let body1 = document.createElement("body1")
  body1.id = "body1"
  document.body.appendChild(body1)
  body1.innerHTML = output.value

  let body1_collection = body1.getElementsByTagName('*')
  for (let x = 0; x < body1_collection.length; x++) {
    body1_collection[x].addEventListener("click", function(q) {
      selected_element_4form = q.target.id
      console.log(selected_element_4form + "THE HOLY ELEMENTSS!!!")
      clear()
      form_update()
      draggable(q.target)
    })
  }

})


//Right click visability handler
let alreadyopen = false
document.addEventListener('contextmenu', function(w) {
  w.preventDefault()

  if (alreadyopen === false) {
    console.log('rhuhh')
  document.getElementById("rightclick_menu").style.display = "flex"
  document.getElementById("rightclick_menu").style.top = event.clientY + 1
  document.getElementById("rightclick_menu").style.left = event.clientX
  console.log(document.elementsFromPoint(event.clientX, event.clientY))
  
  document.getElementById("rc_children_container").textContent = ""
  document.getElementById("rc_parent_container").textContent = ""

  let elementspoint = document.elementsFromPoint(event.clientX, event.clientY)
  for (let x = 0; x < elementspoint.length; x++) {
    console.log(elementspoint.length)
    console.log(elementspoint[x].id)

    if (elementspoint[x].id != "") {
    let rc_children = document.createElement("button")
    document.getElementById('rc_children_container').appendChild(rc_children)
    rc_children.innerHTML = elementspoint[x].id
    rc_children.addEventListener('contextmenu', rc_btn_rc)
    rc_children.addEventListener('click', rc_btn_click)
    rc_children.addEventListener('mouseover', rc_hover)
    rc_children.addEventListener('mouseleave', rc_leave)
    }
  }
  if (elementspoint[0].parentElement.id != "body") {
    let rc_parent = document.createElement("button")
    rc_parent.innerHTML = elementspoint[0].parentElement.id
    document.getElementById("rc_parent_container").appendChild(rc_parent)
    rc_parent.addEventListener('contextmenu', rc_btn_rc)
    rc_parent.addEventListener('click', rc_btn_click)
    rc_parent.addEventListener('mouseover', rc_hover)
    rc_parent.addEventListener('mouseleave', rc_leave)
    }
}
})

//Right click ---> right click
function rc_btn_rc() {
  alreadyopen = true
  setTimeout(() => {
    alreadyopen = false
  }, 1)
  //console.log(document.getElementById(this.innerHTML).childNodes)
  document.getElementById("rc_children_container").textContent = ""
  let allchilds = document.getElementById(this.innerHTML).children
  for (let x = 0; x < allchilds.length; x++) {
    console.log(x)
    console.log(allchilds.length)
    console.log(allchilds)
    let rc_children = document.createElement("button")
    document.getElementById('rc_children_container').appendChild(rc_children)
    rc_children.innerHTML = allchilds[x].id
    rc_children.addEventListener('contextmenu', rc_btn_rc)
    rc_children.addEventListener('click', rc_btn_click)
    rc_children.addEventListener('mouseover', rc_hover)
    rc_children.addEventListener('mouseleave', rc_leave)
  }
  
}
//Right click ---> left click
function rc_btn_click() {
  selected_element_4form = this.innerHTML
  form_update()
  alreadyopen = false
  document.getElementById("rightclick_menu").style.display = "none"
}

//Sets outline on hover over right click elements
function rc_hover() {
  document.getElementById(this.innerHTML).style.outline = "3px solid #84ff00"
}
//Removes outline on mouseleave
function rc_leave() {
document.getElementById(this.innerHTML).style.outline = "unset"
}


//Right click COPY and DELETE
document.getElementById("rc_copy").addEventListener('click', function() {
  let clone = document.getElementById(selected_element_4form).cloneNode(true)
  id_tracker+=1
  let parent = document.getElementById(selected_element_4form).parentElement
  document.getElementById(parent.id).appendChild(clone)
  clone.id =  selected_element_4form + "clone" + id_tracker
  document.getElementById("form_id").value = clone.id
  selected_element_4form = clone.id
  inputs_change()
})

document.getElementById("rc_del").addEventListener('click', function() {
  if (selected_element_4form != "body") {
  document.getElementById(selected_element_4form).remove()
  }
  else {
    alert('please don\'t remove body')
  }
})

//doc click anywhere                                  //IMPORTANT
document.addEventListener('click', clickany)
function clickany(q) {
  if (alreadyopen === false) {
    document.getElementById("rightclick_menu").style.display = "none"
  }
}

//doc hover anywhere
document.addEventListener ("mouseover", function(q) {
  if (q.target.id) {
  document.getElementById(q.target.id).style.outline = "2px solid #84ff00"
  }
})
document.addEventListener ("mouseout", function(t) {
  if (t.target.id) {
  document.getElementById(t.target.id).style.outline = "unset"
  }
})

document.addEventListener("mousemove", function(t) {
  let mouse = document.getElementById('mouse_tooltip')
        let rect = mouse.parentNode.getBoundingClientRect();
      let lefter = event.clientX - rect.left
      let toper = event.clientY - rect.top
      mouse.style.left = lefter + 12 + "px"
      mouse.style.top = toper + -23 + "px"
      mouse.innerHTML = t.target.id
})


//Border for container visability switcher checkbox
document.getElementById('border_checkbox').addEventListener('change', function() {
  if (this.checked) {
    console.log(border_tracker.length)
    for (x = 0; x < border_tracker.length; x++) {
      console.log("anything")
      document.getElementById(border_tracker[x].id).style.borderStyle = 'none'
    }
  }
  else {
    for (x = 0; x < border_tracker.length; x++) {
      console.log("anything")
      document.getElementById(border_tracker[x].id).style.borderStyle = 'solid'
    }
  }
})
  
//Font family + button for adding fonts
let fontfamily_finish = false
document.getElementById('fontfamily_add').addEventListener('click', function() {
  if (fontfamily_finish === true) {
    document.getElementById("fontfamily_link_container").style.display = "none"
    this.innerHTML = "+"
    fontfamily_finish = false
  }
  else {
    document.getElementById("fontfamily_link_container").style.display = "flex"
    this.innerHTML = "-"
    fontfamily_finish = true
  }
})

document.getElementById('fontfamily_link_add').addEventListener('click', function() {
  var option = document.createElement("option")
  option.text = document.getElementById("fontfamily_link_input").value
  document.getElementById('fontfamily_items_select').add(option)
})

//Adds google font from font_arrays (fonts --> + ---> google fonts)
document.getElementById('fontfamily_link_add_google').addEventListener('click', function() {
  var option = document.createElement("option")
  option.text = document.getElementById("fontfamily_link_input_google").value
  document.getElementById('fontfamily_items_select').add(option)
  font_array.push(option.text)
  let font_string
    font_string = font_array.toString().replaceAll(',', "|")
  document.getElementById('googlefonts').href = "https://fonts.googleapis.com/css?family=" + font_string
})

//fonts delete button (fonts ---> remove)
document.getElementById('fontfamily_link_delete').addEventListener('click', function() {
  let remove1 = document.getElementById("fontfamily_items_select")
  remove1.remove(document.getElementById("fontfamily_items_select").selectedIndex)
  //potentially problematic, can remove safely under here
  let index = font_array.indexOf(remove1.options[remove1.selectedIndex])
  if (index != -1) {
    font_array.splice(index, 1)
  }
})

// var loadFile = function(event) {
// 	var image = document.getElementById('output');
//   let reader = new FileReader();
//   let file = event.target.files[0]
//   window.open('./assets/disc.PNG')
//   //image.src = URL.createObjectURL(event.target.files[0]); ////Method 1
//   // // reader.addEventListener("load", function() {  //////Method 2
//   // //   image.src = reader.result;
//   // // });
//   // // if (file) {
//   // //   reader.readAsDataURL(file);
//   // // }                                           //////Method 2
// }

//Standard, hover and active selectors in form, latter part adjusts for input_changes()
document.getElementById('btn_standard').addEventListener('click', btns_hover)
document.getElementById('btn_hover').addEventListener('click', btns_hover)
document.getElementById('btn_active').addEventListener('click', btns_hover)
let btn_hover_selected = "btn_standard"
function btns_hover() {
  btn_hover_selected = this.id
  console.log(this.id)
  document.getElementById('btn_standard').style.backgroundColor = "unset"
  document.getElementById('btn_hover').style.backgroundColor = "unset"
  document.getElementById('btn_active').style.backgroundColor = "unset"
  this.style.backgroundColor = "aqua"

  if (btn_hover_selected === "btn_standard") {
    potential_hover = ""
  }
  else if (btn_hover_selected === "btn_active") {
    potential_hover = ":active"
  }
  else if (btn_hover_selected === "btn_hover") {
    potential_hover = ":hover"
  }
}



var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
  console.log(screenWidth, screenHeight)


  output.value = `
  <div id="div2" style="outline: unset;">
      <div id="div16" style="outline: unset;"><img id="IMG23" src="https://i.postimg.cc/5NgvdLRv/Untitled-2.png"
              style="outline: unset;"></div>
      <div id="div22" style="outline: unset;"><input id="INPUT17"
              src="file:///G:/VS%20PROJECTS/CSS%20writer/glitcher255.github.io/index.html" style="outline: unset;">
          <div id="div18" style="outline: unset;">
              <div id="div19" style="outline: unset;">Something</div>
              <div id="div20" style="outline: unset;">More</div>
              <div id="div21" style="outline: unset;">About</div>
          </div>
      </div>
  </div>
  <div id="div4" style="outline: unset;">
      <div id="div7" style="outline: unset;">
          <div id="div11" style="outline: unset;"><img id="IMG13" src="https://i.postimg.cc/8zM3JJGZ/Untitled.png"
                  style="outline: unset;"></div>
          <div id="div12" style="outline: unset;">learn</div>
      </div>
      <div id="div7clone9" style="outline: unset;"></div>
      <div id="div7clone9clone10" style="outline: unset;"></div>
      <div id="div7clone9clone10clone14" style="outline: unset;"></div>
  </div>`

  document.getElementById("css_output").value = `#div1 {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div2 {
    display: flex;
    width: 100%;
    border-style: none none solid none;
    border-width: 5px;
    background-color: #106B19;
    border-color: #1AAB28;
}

#div3 {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div4 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    border-style: none;
    border-width: 1px;
    margin: 0;
    padding: 30px 20% 30px 20%;
    background-color: #106B19;
    row-gap: 20px;
}

#div5 {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div6 {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div7 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 230px;
    width: 300px;
    border-style: solid;
    border-width: 2px;
    border-radius: 2px;
    background-color: #1AAB28;
    border-color: #adf7ab;
}

#div8 {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div7clone9 {
    height: 230px;
    width: 300px;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div7clone9clone10 {
    height: 230px;
    width: 300px;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div11 {
    height: 100%;
    width: 100%;
    border-style: none;
}

#div12 {
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    height: 15%;
    width: 100%;
    border-style: none;
    border-width: 1px;
    padding: 0;
    position: relative;
    font-family: comfortaa;
    font-size: 25px;
    color: #ffffff;
}

#IMG13 {
    height: 100%;
    width: 100%;
}

#div7clone9clone10clone14 {
    height: 230px;
    width: 300px;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div15 {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div16 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 53px;
    width: 150px;
    border-style: none;
    border-width: 1px;
    font-family: Comfortaa;
    font-size: 25px;
    color: #ffffff;
}

#INPUT17 {
    width: 70%;
    placeholder: Search...;
    border-style: solid;
    border-radius: 3px;
    margin: 6px 20px 6px 20px;
    padding: 10px;
    font-family: Comfortaa;
    font-size: 15px;
    background-color: #1AAB28;
    color: #fcfcfc;
    border-color: #1AAB28;
}

#div18 {
    display: flex;
    right: 0;
    height: 52px;
    width: 30%;
    border-style: none;
    border-width: 1px;
    padding: 0;
    position: initial;
    color: #f2f2f2;
}

#div19 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-style: none;
    border-width: 1px;
    padding: 20px;
    font-family: Comfortaa;
}

#div20 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-style: none;
    border-width: 1px;
    padding: 20px;
    font-family: Comfortaa;
}

#div21 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-style: none;
    border-width: 1px;
    padding: 20px;
    font-family: Comfortaa;
}

#div22 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-style: none;
    border-width: 1px;
}

#IMG23 {
    height: 170%;
    width: 100%;
}`