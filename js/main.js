let inputBox = document.querySelector("#input-box");
let addButton = document.querySelector("button");
let mainUl = document.querySelector("#list-container");

addButton.addEventListener("click", function () {
  if (inputBox.value == "") {
    console.log("impty");
  } else {
    console.log("Hi");
    let text = inputBox.value;
    // ul li
    // li .checked
    let boxLi = document.createElement("li");
    // .one
    let meanDiv = document.createElement("div");
    meanDiv.className = "one";
    // Span
    let mainSpan = document.createElement("span");
    // Icon One
    let iconOne = document.createElement("i");
    iconOne.className = "fa-solid fa-check";
    // P
    let pOfToDo = document.createElement("p");
    pOfToDo.appendChild(document.createTextNode(text));
    // Last icon
    let lastIcon = document.createElement("i");
    lastIcon.className = "fa-solid fa-x last";

    // add all this informetion to the body page
    mainSpan.appendChild(iconOne);
    meanDiv.appendChild(mainSpan);
    meanDiv.appendChild(pOfToDo);
    boxLi.appendChild(meanDiv);
    boxLi.appendChild(lastIcon);
    // add li to the ul on the page
    mainUl.appendChild(boxLi);

    // function onClick => checked
    meanDiv.addEventListener("click", function () {
      if (boxLi.classList.contains("checked")) {
        boxLi.classList.remove("checked");
      } else {
        console.log("checked");
        boxLi.classList.add("checked");
      }
    });
    // fucntion onClick => remeve button
    lastIcon.addEventListener("click", function () {
      boxLi.style.display = "none";
    });
    // Remove value of input box
    inputBox.value = "";
  }
});
