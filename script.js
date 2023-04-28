let id_tracker = 0
let selected_element_4form = "rightclick_menu"
let the_selected_element
let selected_target
let unused_hex = "#000001"  //prevent default color from submitting
let vislock_creation = 1      //lock for +button visability
let potential_hover = ""
let matches
let radio_id_css = "CLASS"

const person = {}
let my = {}
let wow = {}

let border_tracker = []
let font_array = []


let cssparm_array = ["display", "flex-direction", "justify-content", "align-content", "align-items", "flex-wrap", "top",
  "left", "bottom", "right", "height", "width", "placeholder", "border-style", "border-width", "border-radius", "margin",
  "padding", "position", "font-family", "font-size", "font-weight", "font-style", "line-height", "background-color",
  "color", "row-gap", "column-gap", "border-color", "overflow", "background-image"]


let cssinput_array = ["display_input", "flex_direction", "justify_content", "align_content", "align_items", "flex_wrap",
  "x_input", "y_input", "bottom_input", "right_input", "height_input", "width_input", "placeholder_input", "border_style",
  "border_width", "border_radius", "margin_input", "padding_input", "position_input", "fontfamily_input", "fontsize_input",
  "fontweight_input", "fontstyle_input", "lineheight_input", "background_color", "color_input", "flex_gap_row",
  "flex_gap_column", "border_color", "overflow_input", "gradient_input"]

//rgb to hex function for colors //match searches for certain elements
//toString(16) changes the element into hexidecimal and once goes over 9 starts at A.. B.. C etc, slice removes 2 elements, join() reattachs the results of R, G and B
const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`


//+ button and selection container container
// let button_and_container = document.createElement("button")
// document.body.appendChild(button_and_container)
// button_and_container.id = "button_and_container"
//draggable(button_and_container)

//+ button
// let create_new = document.createElement('button')
// document.getElementById("button_and_container").appendChild(create_new)
// create_new.innerHTML = "+"
// create_new.id = "create"
//+ button click
document.getElementById("create").addEventListener('click', function () {
  if (vislock_creation === 1) {
    visswitch_create_button()
  }
})
// Triggers when children are clicked (create item)
document.getElementById("button_and_container").addEventListener('click', function () {
  if (vislock_creation === 0) {
    visswitch_create_button()
  }
})
//Switches visability for creation menu
function visswitch_create_button() {
  if (document.getElementById("select_container").style.display != "none") {
    document.getElementById("select_container").style.display = "none";
    document.getElementById('create').innerHTML = " + "
  }
  else {
    document.getElementById("select_container").style.display = "flex";
    document.getElementById('create').innerHTML = " - "
  }
}
//Container for creation buttons
// let select_container = document.createElement("container")
// document.getElementById("button_and_container").appendChild(select_container)
// select_container.id = "select_container"
document.getElementById("select_container").addEventListener("mousedown", function (s) {
  s.stopPropagation();
})


//>>>>>>>>>>>>>>>>>>>>>>>>>   CREATION   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Button creation button to create buttons
let button_create_button = document.createElement('button')
document.getElementById('select_container').appendChild(button_create_button)
button_create_button.innerHTML = "Create Button"
button_create_button.id = "button_create_button"

//Create: button
button_create_button.addEventListener('click', function () {
  let created_button = document.createElement('button')
  document.body.appendChild(created_button)
  created_button.innerHTML = "Button here"
  id_tracker += 1
  created_button.id = "btn" + id_tracker
  created_button.className = "btn" + id_tracker
  selector(created_button)
  clear()
  document.getElementById('x_input').value = "40%"
  document.getElementById('display_input').value = "flex"
  form_update()
  inputs_change()
  draggable(created_button)
})

//Input creation button to create Inputs
let input_create_button = document.createElement("button")
document.getElementById("more_select_container").appendChild(input_create_button)
input_create_button.innerHTML = "User Input"
input_create_button.id = "input_create_button"


//+button select on press
//Create: Input
document.getElementById("input_create_button").addEventListener('click', function () {
  let created_input = document.createElement("INPUT")
  document.body.appendChild(created_input)
  created_input.value = "INPUTED"
  id_tracker += 1
  created_input.id = created_input.nodeName + id_tracker
  created_input.className = created_input.nodeName + id_tracker
  selector(created_input)
  clear()
  form_update()
  inputs_change()
  draggable(created_input)
})

//Text area creation button to create textareas
let textarea_create_button = document.createElement("button")
document.getElementById("more_select_container").appendChild(textarea_create_button)
textarea_create_button.innerHTML = "Text Area"
textarea_create_button.id = "textarea_create_button"


//Create: Text Area
document.getElementById("textarea_create_button").addEventListener('click', function () {
  let created_textarea = document.createElement("TEXTAREA")
  document.body.appendChild(created_textarea)
  created_textarea.value = "Write your text here..."
  id_tracker += 1
  created_textarea.id = created_textarea.nodeName + id_tracker
  created_textarea.className = created_textarea.nodeName + id_tracker
  selector(created_textarea)
  clear()
  document.getElementById('height_input').value = "120px"
  document.getElementById('width_input').value = "300px"
  form_update()
  inputs_change()
  draggable(created_textarea)
})

//Image creation button to create images
let img_create_button = document.createElement('button')
document.getElementById('select_container').appendChild(img_create_button)
img_create_button.innerHTML = "Image"
img_create_button.id = "img_create_button"

//Create: img
img_create_button.addEventListener('click', function () {
  let created_img = document.createElement('IMG')
  document.body.appendChild(created_img)
  id_tracker += 1
  created_img.id = created_img.nodeName + id_tracker
  created_img.className = created_img.nodeName + id_tracker
  selector(created_img)
  clear()
  document.getElementById('width_input').value = "150px"
  document.getElementById('height_input').value = "150px"
  document.getElementById('img_src').value = "test"
  form_update()
  inputs_change()
  draggable(created_img)
})

//Container creation button to create containers
let container_create_button = document.createElement('button')
document.getElementById('select_container').appendChild(container_create_button)
container_create_button.innerHTML = "Container / Div"
container_create_button.id = "container_create_button"

//Create: container
container_create_button.addEventListener('click', function () {
  let created_container = document.createElement('div')
  document.body.appendChild(created_container)
  id_tracker += 1
  created_container.id = "div" + id_tracker
  created_container.className = "div" + id_tracker
  border_tracker.push(created_container)
  selector(created_container)
  clear()
  document.getElementById('width_input').value = "100%"
  document.getElementById('border_style').value = "solid"
  document.getElementById('border_width').value = "1px"
  document.getElementById('padding_input').value = "30px"
  document.getElementById('display_input').value = "flex"
  document.getElementById('justify_content').value = "center"
  form_update()
  inputs_change()  //breaks everything only if comes first
  draggable(created_container)
})

// document.body.id = "body"
// let body_select = document.createElement('button')
// document.getElementById('select_container').appendChild(body_select)
// body_select.style.position = "relative"
// body_select.innerHTML = "Select Background"
// body_select.id = "body_select"
// //body select click
// body_select.addEventListener('click', function(){
//   selector(document.body)
// })


//------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SELECTOR<<<<<<<<<<<<<<<<<<<<<<<<<--------------------------------
//Find ID of selected element
function selector(selected_element1) {
  console.log(selected_element_4form)
  selected_element_4form = selected_element1.id
  the_selected_element = selected_element1
  selected_target = selected_element1
  //console.log(selected_target)
  //draggable(selected_element1)
  selected_element1.addEventListener('click', function (q) {
    selected_element_4form = q.target.id
    selected_target = q.target
    document.getElementById(selected_element_4form).innerHTML
    clear()
    form_update()
  })
}


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&~~CSS UPDATER~~&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//display values in form on click
function form_update() {
  input_updater_ID()
  //clear()

  //Grabs all ";"s for input_change() //edit: ??? runs on every new line
  matches = Array.from(document.getElementById('stylecss').textContent.matchAll(/\n/g))

  let stylecss = document.getElementById('stylecss').textContent
  // console.log(selected_target)
  let dot_or_hash
  if (document.getElementById("CLASS_radio").checked) {
    dot_or_hash = "."
  }
  else {
    dot_or_hash = "#"
  }
  let first_index = stylecss.indexOf(dot_or_hash + selected_target.id + potential_hover)
  let last_index = stylecss.indexOf("}", first_index)
  let selectedcss = stylecss.substring(first_index, last_index + 1)
  if (first_index === -1) {
    console.log("NOT FOUND")
    return
  }
  //LEARN alternative ... before stylecss instead of Array.from
  //LEARN matches = Array.from(stylecss.matchAll(/;/g))
  //LEARN complicated af string minipulation
  //IMPORTANT SPACES FUCKING SUCK, REMOVE SPACES FIRST AND BE CAREFUL OF THEM, HARD TO SEE
  let oldmatch
  if (matches) {
    matches.forEach((match) => {
      if (match.index > first_index && match.index < last_index) {
        if (oldmatch) {
          let value = stylecss.substring(oldmatch.index, match.index)
          //value = value.replaceAll(" ", "")
          let divide13 = value.indexOf(':')
          let cssproperty = value.substring(1, divide13)
          cssproperty = cssproperty.replaceAll(" ", "")
          let cssparm = value.substring(divide13 + 1, value.length - 1)
          let indexofproperty = cssparm_array.indexOf(cssproperty)
          //Finally
          //console.log(stylecss.substring(first_index, last_index))
          //console.log(cssparm)
          // console.log(document.getElementById(cssinput_array[indexofproperty]))
          //fixes if null, use this for when input css is broken or unreliable :) ! as it checks new lines that maybe empty
          //if (document.getElementById(cssinput_array[indexofproperty]) != null) {
          document.getElementById(cssinput_array[indexofproperty]).value = cssparm
          //}
        }
        if (oldmatch != match) {
          oldmatch = match
        }
      }
    })
  }

  //finds which selected icon in positioner tab and then colors it
  positioner_which()
  function positioner_which() {
    let data_color_on_array = document.querySelectorAll("[data-color_on=on]").length
    //resets all colors with data color on - then //sets all data color on to off
    for (let x = 0; x < data_color_on_array; x++) {
      document.querySelectorAll("[data-color_on=on]")[x].style.backgroundColor = "#f0f0f0"
    }
    for (let x = 0; x < data_color_on_array; x++) {
      document.querySelectorAll("[data-color_on=on]")[0].setAttribute("data-color_on", "off")
    }
    //grabs all icons that match input fields - colors icons and sets their data color to on
    positioner_colored_array = []
    for (let x = 0; x < document.getElementsByClassName("positioner_blue_select").length; x++) {
      if (document.getElementsByClassName("positioner_blue_select")[x].value) {
        let temp = document.getElementsByClassName("positioner_blue_select_parent")[x].querySelector("[data-value=" + document.getElementsByClassName("positioner_blue_select")[x].value)
        temp.style.backgroundColor = "rgb(121, 174, 228)"
        temp.setAttribute("data-color_on", "on")
      }
    }

  }

}  //NO REMOVE

function input_updater_ID() {
  //ID
  document.getElementById("form_id").value = document.getElementById(selected_element_4form).id
  //CLASS
  document.getElementById("class_input").value = document.getElementById(selected_element_4form).className
  //TEXT
  if (selected_element_4form != "body") {
    document.getElementById("text_input").value = selected_target.innerHTML
  }
  //Parent
  document.getElementById("parent_input").value = document.getElementById(selected_element_4form).parentElement.id
  //Image src
  document.getElementById("img_src").value = selected_target.src

  let coloree_classes = document.getElementsByClassName('coloree')
  for (let x = 0; x < coloree_classes.length; x++) {
    document.getElementsByClassName('colorers')[x].value = document.getElementsByClassName('coloree')[x].value
  }

} //NO REMOVE

function clear() {
  for (let x = 0; x < cssinput_array.length; x++) {
    update_total = "document.getElementById(\"" + cssinput_array[x] + "\").value = \"\"" //document.getElementById(selected_element_4form)." + param_array[x]
    updateresult = Function(update_total)()
  }
  //document.getElementById("form_id").value = ""
  document.getElementById("background_color").value = "#000001"
  //resets all colors with data color on - then sets all data color on to off
  let data_color_on_array = document.querySelectorAll("[data-color_on=on]").length
  for (let x = 0; x < data_color_on_array; x++) {
    document.querySelectorAll("[data-color_on=on]")[x].style.backgroundColor = "#f0f0f0"
  }
  for (let x = 0; x < data_color_on_array; x++) {
    document.querySelectorAll("[data-color_on=on]")[0].setAttribute("data-color_on", "off")
  }
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>--DRAG HANDLER--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let mousedown_triggered = false
let drag_select = null
let drag_target
function draggable(selected) {
  if (selected != document.body) {
    selected.addEventListener("mousedown", mousedown)
    function mousedown(q) {
      if (q.buttons != 1) {
        return
      }
      mousedown_triggered = true
      drag_select = q.target

      console.log("selected is ", drag_select.id)
      let node = drag_select
      let clone = node.cloneNode()
      document.body.appendChild(clone)
      clone.style.position = "absolute"
      clone.style.display = "none"

      document.addEventListener("mousemove", mousemover)
      function mousemover(q) {
        let rect
        drag_target = q.target
        // let rect = selected.parentNode.getBoundingClientRect();
        // let lefter = event.clientX - rect.left
        // let toper = event.clientY - rect.top
        // selected.style.left = lefter + "px"
        // selected.style.top = toper + "px"
        document.getElementById("mouse_tooltip").innerHTML = drag_select.id + " child of " + drag_target.id + "?"


        if (clone.parentNode != null) {
          rect = clone.parentNode.getBoundingClientRect();
          clone.style.display = "block"   //needs only once
          clone.style.opacity = 0.2
          let lefter = event.clientX - rect.left
          let toper = event.clientY - rect.top
          clone.style.top = toper + 10 + "px"
          clone.style.left = lefter + 10 + "px"
        }
      }

      document.addEventListener("mouseup", mouseup)
      function mouseup(q) {
        q.preventDefault()
        clone.remove()
        //console.log("target is " + drag_target.id)
        if (drag_target != drag_select && drag_select != null && !!drag_target /*!= null && drag_target != ""*/) {
          drag_target.appendChild(drag_select)
        }

        document.removeEventListener("mousemove", mousemover)
        mousedown_triggered = false
        drag_select = null
        drag_target = ""   //breaks stuff if you enable it, just delete  //in other news, the above used to be getElementById("drag_select") rather than q.target it was q.target.id
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
  document.getElementsByClassName("colorers")[x].addEventListener("change", function () {
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
  inputs_all_classes[x].addEventListener('change', inputs_change)
}

function inputs_change() {
  // for (let x = 0; x < input_array.length; x++) {
  //   total = "document.getElementById(selected_element_4form)." + param_array[x] + " = document.getElementById(\"" + input_array[x] + "\").value"
  //   //console.log (total)
  //   outresult = Function(total)()
  //   //console.log (outresult) 
  // }
  let cssline

  if (btn_hover_selected === "btn_standard") {
    potential_hover = ""
  }
  else if (btn_hover_selected === "btn_active") {
    potential_hover = ":active"
  }
  else if (btn_hover_selected === "btn_hover") {
    potential_hover = ":hover"
  }
  if (radio_id_css === "ID") {
    cssline = "#" + document.getElementById(selected_element_4form).id + potential_hover + " {" + "\n"
  }
  else /*if (radio_id_css === "CLASS")*/ {
    cssline = "." + document.getElementById(selected_element_4form).className + potential_hover + " {" + "\n"
  }
  //console.log(cssline)        //ENABLE THIS
  //paramter of css values + the value of CURRENT input fields
  //object storage test
  person[selected_element_4form] = {}
  for (let i = 0; i < cssinput_array.length; i++) {
    if (document.getElementById(cssinput_array[i]).value != "" && document.getElementById(cssinput_array[i]).value != "#000001") {
      cssline += cssparm_array[i] + ":" + document.getElementById(cssinput_array[i]).value + ";" + "\n"
      //console.log(cssline)

      person[selected_element_4form][cssparm_array[i]] = document.getElementById(cssinput_array[i]).value
    }
  }
  //object storage test
  cssline += "}"

  let css_output = document.createTextNode(cssline)
  let stylecss = document.getElementById('stylecss').textContent
  if (radio_id_css === "ID") {
    the_first_index = stylecss.indexOf("#" + document.getElementById(selected_element_4form).id + potential_hover)
  }
  else {
    the_first_index = stylecss.indexOf("." + document.getElementById(selected_element_4form).id + potential_hover)
  }
  let last_index = stylecss.indexOf("}", the_first_index)
  //Deletes the css code
  if (the_first_index != -1) {
    document.getElementById('stylecss').textContent = stylecss.replace(stylecss.substring(the_first_index, last_index + 1), cssline)
  }
  //Then rebinds the new one
  if (the_first_index === -1) {
    document.getElementById('stylecss').appendChild(css_output)
  }


  //ID submit
  selected_target.id = document.getElementById("form_id").value //found
  //class submit
  selected_target.className = document.getElementById("class_input").value

  //Text submit      //FOUND BUG
  if (selected_element_4form != "body") {
    selected_target.innerHTML = document.getElementById('text_input').value
  }
  //parent input submit
  let parent_id = document.getElementById("parent_input").value
  let child_id = selected_target
  if (parent_id != "" && parent_id != child_id.parentNode.id) {
    console.log(child_id.parentNode.id)
    document.getElementById(parent_id).appendChild(child_id)
  }
  //sets position from absolute to initial
  if (parent_id === child_id.parentElement.id && child_id.parentElement.id != "body") {
    let initial_pos = the_selected_element.style.position
    if (initial_pos === "absolute") {
      the_selected_element.style.position = "initial"
    }
  }
  //img src submit
  selected_target.src = document.getElementById('img_src').value

  //img checkbox natural height / width 
  if (document.getElementById('img_checkbox').checked) {
    document.getElementById(selected_element_4form).style.height = "auto" //document.getElementById(selected_element_4form).naturalHeight;
    document.getElementById(selected_element_4form).style.width = "auto"//document.getElementById(selected_element_4form).naturalWidth;
  }
  // if (document.getElementById('img_checkbox').checked) {
  //   document.getElementById(selected_element_4form).style.height = "100%"
  //   document.getElementById(selected_element_4form).style.width = "100%"
  // }

  // const person = {firstname: {},what: "test"}

  // person.firstname.WTF = {}
  // person.firstname.WTF = "WHAT"
  // console.log(person)
  // }) //NO REMOVE
}
//^^^^^^^^^^^^^!!!!!!!!!!!!!!!!!!!!!>> INPUT SUBMITTER <<!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!^^^^^^^^^^


//vislock checkbox for creation menu (create item)
let vislock_create = document.createElement("INPUT")
vislock_create.type = "checkbox"
document.getElementById("select_container").appendChild(vislock_create)
vislock_create.checked = true
vislock_create.id = "vislock_create"

vislock_create.addEventListener('click', function () {
  if (vislock_create.checked) {
    vislock_creation = 1
  }
  else {
    vislock_creation = 0
  }
})


//Moves form left to right
document.getElementById('form_left_right').addEventListener('click', function () {
  if (document.getElementById('form_container').style.left == 0) {
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
  document.getElementsByClassName("select_parents")[x].addEventListener('focus', function () {
    document.getElementsByClassName('select_child')[x].style.display = "block"
  })

  document.getElementsByClassName("select_child")[x].addEventListener('blur', function () {
    document.getElementsByClassName('select_child')[x].style.display = "none"
  })

  document.getElementsByClassName("select_child")[x].addEventListener('change', function () {
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
document.getElementById('output_updater').addEventListener("click", function () {
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
  lines.splice(0, 265 + csslines)  //script tag +1 in html and remove stylecss
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
document.getElementById("output").addEventListener("scroll", function () {
  line_counter.scrollTop = output.scrollTop
})
document.getElementById("line_counter").addEventListener("scroll", function () {
  output.scrollTop = line_counter.scrollTop
})


//Open in new tab button CLICK
document.getElementById('new_tab_btn').addEventListener('click', function () {
  let win = window.open()
  win.document.getElementsByTagName('html')[0].remove()
  //let element = document.createElement('body')
  let element = document.createElement('html')
  element.type = "text/javascript"
  element.innerHTML = document.getElementById('output').value
  setTimeout(function () {
    win.document.append(element)
  }, 1000)
})


//Output visswitcher hide
document.getElementById("output_and_counter").style.display = "none"
//Output visswitcher hide button click
document.getElementById("output_visswitch").addEventListener('click', function () {
  if (document.getElementById("output_and_counter").style.display === "none") {
    document.getElementById("output_and_counter").style.display = "flex"
    document.getElementById("output_visswitch").style.bottom = 200
    document.getElementById("output_visswitch").innerHTML = "hide"
  }

  else {
    document.getElementById("output_and_counter").style.display = "none"
    output_visswitch.style.bottom = 0
    output_visswitch.innerHTML = "output"
  }
})

document.getElementById("output_exit_button").addEventListener('click', function () {
  document.getElementById("output_and_counter").style.display = "none"
  output_visswitch.style.bottom = 0
  output_visswitch.innerHTML = "output"
})


//Import mode
document.getElementById("import_button").addEventListener('click', function () {
  document.getElementById("stylecss").textContent = document.getElementById("css_output").value
  let body1 = document.createElement("body1")
  body1.id = "body1"
  document.body.appendChild(body1)
  body1.innerHTML = output.value


  let body1_collection = body1.getElementsByTagName('*')
  for (let x = 0; x < body1_collection.length; x++) {
    body1_collection[x].addEventListener("click", function (q) {
      selected_element_4form = q.target.id
      selected_target = q.target
      clear()
      form_update()
      draggable(q.target)
    })
  }
  id_tracker += body1_collection.length + 10

  document.getElementById("div1").remove()
})


//Right click handler
let alreadyopen = false
document.addEventListener('contextmenu', function (w) {
  w.preventDefault()
  if (alreadyopen === false) {
    let rcer = document.getElementById("rightclick_menu")
    let rect = rcer.parentNode.getBoundingClientRect();
    let lefter = event.clientX - rect.left
    let toper = event.clientY - rect.top
    rcer.style.left = lefter + "px"
    rcer.style.top = toper + 1 + "px"
    document.getElementById("rightclick_menu").style.display = "flex"

    document.getElementById("rc_children_container").textContent = ""
    document.getElementById("rc_parent_container").textContent = ""

    let elementspoint = document.elementsFromPoint(event.clientX, event.clientY)
    for (let x = 0; x < elementspoint.length; x++) {

      if (elementspoint[x].id != "") {
        let rc_children = document.createElement("button")
        document.getElementById('rc_children_container').appendChild(rc_children)
        rc_children.innerHTML = elementspoint[x].id
        //
        rc_children.num = elementspoint[x]
        console.log(rc_children.num)
        //
        rc_children.addEventListener('contextmenu', rc_btn_rc)
        rc_children.addEventListener('click', rc_btn_click)
        rc_children.addEventListener('mouseover', rc_hover)
        rc_children.addEventListener('mouseleave', rc_leave)
      }
    }
    if (elementspoint[0].parentElement.id != "body") {
      let rc_parent = document.createElement("button")
      rc_parent.innerHTML = elementspoint[0].parentElement.id
      //
      rc_parent.num = elementspoint[0].parentElement
      //
      document.getElementById("rc_parent_container").appendChild(rc_parent)
      rc_parent.addEventListener('contextmenu', rc_btn_rc)
      rc_parent.addEventListener('click', rc_btn_click)
      rc_parent.addEventListener('mouseover', rc_hover)
      rc_parent.addEventListener('mouseleave', rc_leave)
    }
  }
})

//Right click ---> right click  //potentially needs the // update as above, untested
function rc_btn_rc() {
  alreadyopen = true
  setTimeout(() => {
    alreadyopen = false
  }, 1)
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
function rc_btn_click(q) {
  selected_element_4form = this.innerHTML  //needs to be deprecated
  console.log(q.target.num)
  //selected_target = this.innerHTML  //old code when used innerhtml for id instead of target (or this)
  selected_target = q.target.num     //but perfect as is - may want to unite functions but complex
  clear()
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
document.getElementById("rc_copy").addEventListener('click', function () {
  console.log("COPY INVOKE")
  let rc_select = document.getElementById(document.getElementById("form_id").value).getElementsByTagName('*')
  // let initial_select = selected_element_4form

  //removed class designation , now works with just IDs

  //checks and adds class for MAIN
  // if (document.getElementById("class_input").value === "") {
  //   id_tracker += 1
  //   document.getElementById("class_input").value = "class_of_" + selected_element_4form + id_tracker
  //   console.log (document.getElementById("class_input").value)
  //   console.log("called")
  //   inputs_change()
  //   //
  //   document.getElementById("CLASS_radio").checked = true
  //   radio_id_css = "CSS"
  //   inputs_change()
  // }

  // //checks and adds class for CHILDREN
  // for (let x = 0; x < rc_select.length; x++) {
  //   selected_element_4form = rc_select[x].id
  //   //checks and adds class for children
  //   if (document.getElementById("class_input").value === "") {
  //     id_tracker += 1
  //     document.getElementById("class_input").value = "class_of_" + rc_select[x].id + id_tracker
  //     inputs_change()
  //     //
  //     document.getElementById("CLASS_radio").checked = true
  //     radio_id_css = "CSS"
  //     inputs_change()
  //   }
  // }

  // document.getElementById("ID_radio").checked = true
  // radio_id_css = "ID"

  //selected_element_4form = initial_select

  // //cloning process
  clear()
  let clone = selected_target.cloneNode(true)
  let parent = selected_target.parentElement
  //clone.id =  selected_element_4form + "clone_of_" + selected_element_4form + id_tracker
  parent.appendChild(clone)
  //selected_element_4form = clone.id
  console.log(selected_element_4form)
  console.log(clone + "THE CLONE")
  clear()
  //inputs_change()

  clone.addEventListener("click", function (q) {
    console.log("CLONE CLICKED")
    selected_element_4form = q.target.id
    selected_target = q.target
    form_update()
  })

  //when these commands are run, it deletes a lot of css

  //addeventlistener
  // for (let x = 0; x < rc_select.length; x++) {
  //   document.getElementById(rc_select[x].id).addEventListener("click", function(q) {
  //     selected_element_4form = q.target.id
  //     clear()
  //     form_update()
  //     draggable(q.target)
  //   })
  // }

})

document.getElementById("rc_del").addEventListener('click', function () {
  if (selected_element_4form != "body") {
    selected_target.remove()
    console.log("DELETE INVOKED")
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
document.addEventListener("mouseover", function (q) {
  if (q.target.id) {
    q.target.style.outline = "2px solid #84ff00"
  }
})
document.addEventListener("mouseout", function (t) {
  if (t.target.id) {
    t.target.style.outline = "unset"
  }
})

document.addEventListener("mousemove", function (t) {
  let mouse = document.getElementById('mouse_tooltip')
  let rect = mouse.parentNode.getBoundingClientRect();
  let lefter = event.clientX - rect.left
  let toper = event.clientY - rect.top
  mouse.style.left = lefter + 12 + "px"
  mouse.style.top = toper + -23 + "px"
  mouse.innerHTML = t.target.id
})


//Border for container visability switcher checkbox
document.getElementById('border_checkbox').addEventListener('change', function () {
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
document.getElementById('fontfamily_add').addEventListener('click', function () {
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

document.getElementById('fontfamily_link_add').addEventListener('click', function () {
  var option = document.createElement("option")
  option.text = document.getElementById("fontfamily_link_input").value
  document.getElementById('fontfamily_items_select').add(option)
})

//Adds google font from font_arrays (fonts --> + ---> google fonts)
document.getElementById('fontfamily_link_add_google').addEventListener('click', function () {
  var option = document.createElement("option")
  option.text = document.getElementById("fontfamily_link_input_google").value
  document.getElementById('fontfamily_items_select').add(option)
  font_array.push(option.text)
  let font_string
  font_string = font_array.toString().replaceAll(',', "|")
  document.getElementById('googlefonts').href = "https://fonts.googleapis.com/css?family=" + font_string
})

//fonts delete button (fonts ---> remove)
document.getElementById('fontfamily_link_delete').addEventListener('click', function () {
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
    clear()
    form_update()
  }
  else if (btn_hover_selected === "btn_active") {
    potential_hover = ":active"
    clear()
    form_update()
  }
  else if (btn_hover_selected === "btn_hover") {
    potential_hover = ":hover"
    clear()
    form_update()
  }
}

for (let x = 0; x < document.getElementsByClassName("radio_id_class").length; x++) {
  document.getElementsByClassName("radio_id_class")[x].addEventListener("change", function () {
    if (this.id === "ID_radio") {
      radio_id_css = "ID"
    }
    else {
      radio_id_css = "CSS"
    }
  })
}


//Load random element on load
document.addEventListener("DOMContentLoaded", function () {
  console.log("LOADED")
  let temp_created_container = document.createElement('div')
  document.body.appendChild(temp_created_container)
  id_tracker += 1
  temp_created_container.id = "div" + id_tracker
  selector(temp_created_container)
  selected_target = temp_created_container
  document.getElementById('width_input').value = "100%"
  document.getElementById('border_style').value = "solid"
  document.getElementById('border_width').value = "1px"
  document.getElementById('padding_input').value = "30px"
});


//positioner only one select, turns icons blue, should have used radios which is what this is
//turns color of element ID input_array to blue and references it to data-value
for (let y = 0; y < 5; y++) {
  let property_array = ["flex_direction_buttons", "justify_content_buttons", "align_items_buttons", "align_content_buttons", "flex_wrap_buttons"]
  let input_array = ["flex_direction", "justify_content", "align_items", "align_content", "flex_wrap"]
  //click
  for (let x = 0; x < document.getElementsByClassName(property_array[y]).length; x++) {
    //clicked color, uncolors
    document.getElementsByClassName(property_array[y])[x].addEventListener("click", function () {
      if (this.style.backgroundColor === "rgb(121, 174, 228)") {
        this.style.backgroundColor = "#f0f0f0"
        //none selected
        document.getElementById(input_array[y]).value = ""
        inputs_change()
      }
      else {
        //clicked uncolored, uncolors all, then colors clicked, basically radio
        for (let x = 0; x < document.getElementsByClassName(property_array[y]).length; x++) {
          document.getElementsByClassName(property_array[y])[x].style.backgroundColor = "#f0f0f0"
        }
        this.style.backgroundColor = "rgb(121, 174, 228)"
        //sets attribute for selected element so it can be turned on and off when element is selected
        this.setAttribute("data-color_on", "on")
        //one selected, sets input value then updates
        document.getElementById(input_array[y]).value = this.getAttribute("data-value")
        inputs_change()
      }

    })
  }
}


  output.value = `
  <body1 id="body1">
  
    <body1 id="body1" style="outline: unset;"><body1 id="body1" style="outline: unset;"><body1 id="body1">
      <body1 id="body1">
          <body1 id="body1" style="outline: unset;">
              <div id="div2" style="outline: unset;">
                  <div id="div16" style="outline: unset;"><img id="IMG23" src="https://i.postimg.cc/5NgvdLRv/Untitled-2.png" style="outline: unset;"></div>
                  <div id="div22" style="outline: unset;"><input id="INPUT17" src="file:///G:/VS%20PROJECTS/CSS%20writer/glitcher255.github.io/index.html" style="outline: unset;">
                      <div id="div18" style="outline: unset;">
                          <div id="div19" style="outline: unset;">Something</div>
                          <div id="div20" style="outline: unset;">More</div>
                          <div id="div21" style="outline: unset;">About</div>
                      </div>
                  </div>
              </div>
              <div id="div4" style="outline: unset;" class="">              <div id="div502" class="class_of_div502509" style="outline: unset;">                  <div id="div29" class="" style="outline: unset;"><img id="IMG505" class="" src="./assets/csswriter_cap1.PNG" style="outline: unset; height: auto; width: auto;"></div>                  <div id="div507" class="" style="outline: unset;">                      <div id="div32" class="" style="outline: unset;">CSS WRITER</div>                      <div id="div33" class="" style="outline: unset;">Automatically generated CSS code using a simple                          yet potent interface, this website was fully designed using CSS writer</div>                  </div>              <img id="IMG34" class="" src="file:///G:/VS%20PROJECTS/CSS%20writer/glitcher255.github.io/assets/newpage.PNG" style="outline: unset;"></div>          <div id="div502" class="class_of_div502509" style="outline: unset;">                  <div id="div29" class="" style="outline: unset;"><img id="IMG505" class="" src="file:///G:/VS%20PROJECTS/CSS%20writer/glitcher255.github.io/assets/website1.PNG" style="outline: unset; height: auto; width: auto;"></div>                  <div id="div1000" class="" style="outline: unset;">                      <div id="div32" class="" style="outline: unset;">CSS WRITER</div>                      <div id="div33" class="" style="outline: unset;">Automatically generated CSS code using a simple                          yet potent interface, this website was fully designed using CSS writer</div>                  </div>              <img id="IMG39" class="" src="file:///G:/VS%20PROJECTS/CSS%20writer/glitcher255.github.io/assets/newpage.PNG" style="outline: unset;"></div><div id="div502" class="class_of_div502509" style="outline: unset;">                  <div id="div29" class="" style="outline: unset;"><img id="IMG505" class="" src="file:///G:/VS%20PROJECTS/CSS%20writer/glitcher255.github.io/assets/website2.PNG" style="outline: unset; height: auto; width: auto;"></div>                  <div id="div507" class="" style="outline: unset;">                      <div id="div32" class="" style="outline: unset;">CSS WRITER</div>                      <div id="div33" class="" style="outline: unset;">Automatically generated CSS code using a simple                          yet potent interface, this website was fully designed using CSS writer</div>                  </div>              <img id="IMG41" class="" src="./assets/newpage.PNG" style="outline: unset;"></div></div>
          </body1>
      </body1>
    </body1>
        </body1></body1></body1>`

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
flex-wrap: nowrap;
height: 100%;
width: 100%;
border-style: none;
border-width: 1px;
margin: 0;
padding: 30px 10% 30px 10%;
background-color: #106B19;
row-gap: 0;
column-gap: 20px;
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

.class_of_div7502 {
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
}

#btn1 {
    display: flex;
    top: 40%;
}

#div7 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 270px;
    width: 350px;
    border-style: solid;
    border-width: 2px;
    border-radius: 2px;
    background-color: #106B19;
    border-color: #adf7ab;
}

#div7:active {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-style: solid;
    border-width: 2px;
    border-radius: 2px;
    background-color: #1CB82B;
    border-color: #adf7ab;
}

#div7clone_of_div7502 {}

#div7:hover {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-style: solid;
    border-width: 2px;
    border-radius: 2px;
    background-color: #1CB82B;
    border-color: #adf7ab;
}

.class_of_div502509 {
}

#div503 {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div504 {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#IMG505 {
height: 100%;
width: 100%;
}

#div506 {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div507 {
display: flex;
flex-direction: column;
left: 0;
bottom: 0;
right: 0;
border-width: 1px;
margin: -49px 0 0 0;
position: absolute;
font-family: Comfortaa;
font-size: 20px;
font-weight: bold;
color: #000000;
background-image: linear-gradient(180deg, rgba(255, 0, 0, 0), rgba(0, 0, 0, 0.5));
}

#div508 {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div502 {
display: flex;
flex-direction: column;
width: 100%;
border-width: 1px;
position: relative;
overflow: hidden;
}

#div29 {
height: 100%;
width: 100%;
border-width: 1px;
overflow: hidden;
}

#div31 {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

#div32 {
display: flex;
justify-content: center;
width: 100%;
border-width: 1px;
padding: 30px;
}

#div33 {
width: 100%;
border-width: 1px;
padding:30px;
}

#IMG34 {
right:0;
height:40px;
width:40px;
border-width: 1px;
position:absolute;
}
#div1000 {
display: flex;
flex-direction: column;
left: 0;
bottom: 0;
right: 0;
border-width: 1px;
margin: -49px 0 0 0;
position: absolute;
font-family: Comfortaa;
font-size: 20px;
font-weight: bold;
color:#ffffff;
background-image: linear-gradient(180deg, rgba(255, 0, 0, 0), rgba(0, 0, 0, 0.5));
}
#IMG39 {
right:0;
height:40px;
width:40px;
border-width: 1px;
position:absolute;
}#IMG40 {
height:50px;
width:50px;
border-style: solid;
border-width: 1px;
}#IMG41 {
right:0;
height:40px;
width:40px;
border-width: 1px;
position:absolute;
}

`