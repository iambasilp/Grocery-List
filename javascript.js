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
      trash.classList.add('ri-delete-bin-5-fill')
      li.appendChild(trash)
   }
   else{
      wrong()
   }
  
}


function deletefunction(event){
   if(event.target.classList[0]=== 'ri-delete-bin-5-fill'){
      let parent = event.target.parentElement
      parent.classList.add('slideout')
      parent.addEventListener('transitionend',function(){
         parent.remove()
      })
      // parent.remove()
   }
}
function wrong(){
  let WrongBox = document.querySelector('.box')

  WrongBox.classList.add('active')
}


KitchenList.addEventListener('click',deletefunction)

Button.addEventListener('click',showList)