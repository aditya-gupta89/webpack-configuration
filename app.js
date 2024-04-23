import _ from "lodash";
function handleClick() {
  const h1Element = document.getElementById("text");
  h1Element.innerText = "Text has updated now";
  const ul = document.getElementById("shoppingList");
  const list = ["Mongo", "Banana", "Orange"];
  _.forEach(list, function (item) {
    console.log(item);
    const liRef = document.createElement("li");
    liRef.innerHTML = item;
    ul.appendChild(liRef);
  });
}

// document.getElementById("button").addEventListener("click", () => {
//   const h1Element = document.getElementById("text");
//   h1Element.innerText = "Text has updated now";
//   const ul = document.getElementById("shoppingList");
//   const list = ["Mongo", "Banana", "Orange"];
//   _.forEach(list, function (item) {
//     console.log(item);
//     const liRef = document.createElement("li");
//     liRef.innerHTML = item;
//     ul.appendChild(liRef);
//   });
// });
