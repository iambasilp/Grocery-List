let Button = document.querySelector(".button");
let Input = document.querySelector(".kithenInput");
let KitchenList = document.querySelector(".kitchen_list");
let getInputData;
let kitchenInputArray = [];

function setLocalStorage() {
  localStorage.setItem("kitchenInputdata", JSON.stringify(kitchenInputArray));
}
function getLocalStorage() {
  if (localStorage.getItem("kitchenInputdata")) {
    kitchenInputArray = JSON.parse(localStorage.getItem("kitchenInputdata"));
    buildUI();
  }
}
function buildUI() {
  KitchenList.textContent = "";
  kitchenInputArray.forEach((item) => {
    if (getInputData != 0) {
      li = document.createElement("li");
      let spanEle = document.createElement("span");
      li.appendChild(spanEle);
      spanEle.innerText = item;
      KitchenList.appendChild(li);
      Input.value = "";
      let trash = document.createElement("i");
      trash.classList.add("ri-delete-bin-5-fill", "f-trash");
      li.appendChild(trash);
      // create edit button
      let editButton = document.createElement("i");
      editButton.classList.add("ri-pencil-fill", "f-edit");
      li.appendChild(editButton);
    } 
  });
}
function showList() {
  getInputData = Input.value;
  kitchenInputArray.push(getInputData);
  console.log(kitchenInputArray);
  //set local storage
  setLocalStorage();

  //get local storage
  getLocalStorage();

}



function deletefunction(event) {
  if (event.target.classList[1] === "f-trash") {
    let parent = event.target.parentElement;
    parent.classList.add("slideout");
    parent.addEventListener("transitionend", function () {
      parent.remove();
    });
    // parent.remove()
  }
}
function editfunction(event) {
  if (event.target.classList[1] === "f-edit") {
    let edittedValue = prompt("please add new text");
    let parent = event.target.parentElement;
    let spanEle = parent.querySelector("span");
    spanEle.innerText = edittedValue;
  }
}
document.querySelector('.clear-button').addEventListener('click',()=>{
  kitchenInputArray.splice(0,kitchenInputArray.length)
  buildUI()
  localStorage.setItem("kitchenInputdata", JSON.stringify(kitchenInputArray));
  
})
KitchenList.addEventListener("click", deletefunction);
KitchenList.addEventListener("click", editfunction);
Button.addEventListener("click", showList);

getLocalStorage();
