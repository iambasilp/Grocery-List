let Button = document.querySelector('.button')
let Input = document.querySelector('.kithenInput')
let KitchenList = document.querySelector('.kitchen_list')



function showList(){
   if(Input.value != 0){
      let getInputData = Input.value
      li = document.createElement('li')
      li.innerText = getInputData;
      KitchenList.appendChild(li)
      Input.value = ""
      let trash = document.createElement('i')
      trash.classList.add('ri-delete-bin-5-fill','f-trash')
      li.appendChild(trash)
      // create edit button
      let editButton = document.createElement('i')
      editButton.classList.add('ri-pencil-fill','f-edit')
      li.appendChild(editButton)
   }
   else{
      wrong()
   }
  
}

function wrong(){
   let WrongBox = document.querySelector('.box')
   
   WrongBox.classList.add('active')
}


function deletefunction(event){
   if(event.target.classList[1]=== 'f-trash'){
      let parent = event.target.parentElement
      parent.classList.add('slideout')
      parent.addEventListener('transitionend',function(){
         parent.remove()
      })
      // parent.remove()
   }
}
function editfunction(event){
   if(event.target.classList[1] === 'f-edit'){
      let edittedValue = prompt('please add new text')
      let parent = event.target.parentElement;
      parent.innerText = edittedValue
   }
}
KitchenList.addEventListener('click',deletefunction)
KitchenList.addEventListener('click',editfunction)
Button.addEventListener('click',showList)