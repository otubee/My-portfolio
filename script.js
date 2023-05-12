// Getting Elements by Id

const listDrop = document.getElementById('listdrop')
const dropDown = document.getElementById('dropDown')
const dropDownWrap = document.getElementById('dropdownwrap')
const realBody = document.getElementById('realBody')
const head = document.getElementById('head') 
const input = document.getElementById('input')
const comment = document.getElementById('comment')
const btn = document.getElementById('btn')
const serv = document.getElementById('serv')
const service = document.getElementById("serve")
const server = document.getElementById("server")
const buton = document.getElementById('buton')
const but = document.getElementById('but')
const bton = document.getElementById('bton')


var flag = true
// Creating a funtion that toggles between the Light mode and dark mode.

myFunc = ()=>{
  realBody.className = flag ? "bg-black text-gray-500" : ""
  btn.className = flag ? "ml-4 py-4 rounded-xl w-24 bg-gray-800 hover:bg-gray-900 text-white  border border-blue-500" : ""
  serv.className = flag ? "bg-gray-800 text-white p-2 w-42 text-center rounded-3xl border border-blue-500" : ""
  service.className  = flag ? "bg-gray-800 text-white p-2 w-42 text-center rounded-3xl border border-blue-500" : "" 
  server.className  = flag ? "bg-gray-800 text-white p-2 w-42 text-center rounded-3xl border border-blue-500" : ""
  buton.className = flag ? "w-24 bg-gray-800 hover:bg-gray-900 text-white text-center border border-blue-500" : ""
  but.className = flag ? "w-24 bg-gray-800 hover:bg-gray-900 text-white text-center border border-blue-500" : ""
  bton.className = flag ? "w-24 bg-gray-800 hover:bg-gray-900 text-white text-center border border-blue-500" : ""
  flag = !flag
}

// Passing the function to a button that instantiate the action
butt.addEventListener('click', ()=>{
  myFunc()
})

// Creating a click function that shows the navbar dropdown menu when page is diplayed on a small screen.
dropDown.addEventListener('click', ()=>{
  if (listDrop.classList.contains('invisible')){
    listDrop.classList.remove('invisible')
  }else{
    listDrop.classList.contains('invisible')
  }
})

window.onclick = (e)=>{
  if(!dropDownWrap.contains(e.target) && !listDrop.classList.contains('invisible')){
    listDrop.classList.add('invisible')
  }
}

// Creating a function that dynamically output the feedback and comments.

btn.addEventListener('click', ()=>{
  var comments = document.createElement('p')
  comments.className = "text-xl w-3/4 h-auto border border-red-500"
  comments.innerText += input.value
  console.log(comments)
  comment.appendChild(comments)
  input.value = ""
})



