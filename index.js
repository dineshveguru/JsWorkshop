document.addEventListener("DOMContentLoaded", function () {
  // Selecting elements

  // getElementById

  // const heading = document.getElementById("heading");
  // console.log(heading);

  const heading = document.getElementById("heading");
  console.log(heading);

  //getElementByClassName

  const name = document.getElementsByClassName("submit")[0];
  console.log(name);

  //getElementByTagName

  const listItem = document.getElementsByTagName("div");
  console.log(listItem);

  //querySelector

  const heading1 = document.querySelector("li");
  console.log(heading1);

  //querySelectorAll

  const listItems = document.querySelectorAll("li");
  console.log(listItems);

  //Adding styles

  heading.style.color = "blue";
  heading.style.fontSize = "10rem";
  heading.style.fontFamily = "jetBrains Mono";

  //   listItems.style.color = "blue";
  //   for (let i = 0; i < listItems.length; i++) {
  //     listItems[i].style.color = "red";
  //   }

  // creating elements

  const newListItem = document.createElement("li");
  newListItem.innerHTML = "dinesh";
  console.log(newListItem);
  const list = document.querySelector("ul");
  console.log(list);
  list.append(newListItem);
  document.querySelectorAll("li").forEach((item) => {
    item.style.color = "red";
  });

  //task1

  /*you need to create a new div and add h1 with your name and p tag which describes the current year you are studying*/
  const container = document.createElement("div");
  container.innerHTML = "<h1>dinesh</h1><p>third</p>";
  console.log(container);
  document.querySelector(".box").append(container);

  const box = document.querySelector(".box");

  //adding attributes

  const colorBox = document.createElement("div");
  colorBox.setAttribute("class", "color-box");
  box.append(colorBox);

  //adding classnames

  const newBox = document.createElement("div");
  box.append(newBox);
  box.classList.add("color-box", "rounded-corners");

  //event-listeners

  const text = document.querySelector("p");

  //onclick

  name.addEventListener("click", function () {
    if (text.style.fontSize == "3rem") {
      text.style.fontSize = "1rem";
    } else {
      text.style.fontSize = "3rem";
    }
  });

  //onmouseover

  text.addEventListener("mouseover", function () {
    text.style.color = "red";
  });

  //onmouseleave

  text.addEventListener("mouseleave", function () {
    text.style.color = "black";
  });

  //task2

  /*create a unordered list with 5 list elements in it and place a button. when the button is clicked the elements of the unordered list should change it's font style to 'Segoe UI' and change it's font weight to 800*/

  name.addEventListener("click", function () {
    listItems.forEach((item) => {
      item.style.fontFamily = "Segoe UI";
      item.style.fontWeight = "800";
    });
  });

  //forms

  const form = document.querySelector("form");
  document.querySelector("#submit-button").disabled = true;
  document.querySelector("#user-name").onkeyup = function () {
    if (document.querySelector("#user-name").value.length > 0) {
      document.querySelector("#submit-button").disabled = false;
    } else {
      document.querySelector("#submit-button").disabled = true;
    }
  };
  form.onsubmit = function () {
    const task = document.querySelector("#user-name").value;
    const taskList = document.querySelector(".taskList");
    const taskItem = document.createElement("li");
    console.log(taskList);
    taskItem.innerHTML = task;
    taskList.append(taskItem);
    document.querySelector("#user-name").value = "";
    return false;
  };

  //ES6

  var a = 5;
  function square(val) {
    return val * val;
  }

  var result = square(a);
  console.log(result);

  var result = (a) => a * a;
  console.log(result(2));
  words = ["laskdjf", "ajskdfh", "sadfjs"];
  console.log(...words);
});
