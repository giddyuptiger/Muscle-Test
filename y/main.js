// let buttonsDiv = elt("div", { id: "buttons" });
let buttonDiv = elt("div", { id: "button" });
let answerBox = elt("div", { id: "answerBox" });
document.body.appendChild(buttonDiv);
// document.body.appendChild(buttonsDiv);
document.body.appendChild(answerBox);
// setButtons();
buttonDiv.appendChild(
  elt("button", {
    id: "left-btn",
    className: "button",
    onclick: function () {
      showAnswer(state);
    },
  })
);

let state;
setInterval(selection, 100);
function selection() {
  let TF = Math.floor(Math.random() * 2);
  TF ? (state = 1) : (state = 0);
}

// function setButtons() {
//   buttonsDiv.innerHTML = "";
//   let options = {};
//   let answer = Math.floor(Math.random() * 2);
//   if (answer == 0) options = { left: true, right: false };
//   if (answer == 1) options = { left: false, right: true };
//   buttonsDiv.appendChild(
//     elt("button", {
//       id: "left-btn",
//       className: "button",
//       "data-answer": options.left,
//       onclick: function () {
//         showAnswer(options.left);
//       },
//     })
//   );
//   buttonsDiv.appendChild(
//     elt("button", {
//       id: "right-btn",
//       className: "button",
//       "data-answer": options.right,
//       onclick: function () {
//         showAnswer(options.right);
//       },
//     })
//   );
// }

function showAnswer(answer) {
  if (answer) {
    answer = "TRUE";
  } else {
    answer = "FALSE";
  }
  answerBox.innerHTML = "";
  let answerHTML = elt("h1", { id: "answer", class: "answer" }, answer);
  // setButtons();
  answerBox.appendChild(answerHTML);
  answerHTML.style.opacity = "1";
  // setTimeout(() => {
  //   answerHTML.style.opacity = "1";
  // }, "20");
  setTimeout(() => {
    answerHTML.style.opacity = "0";
  }, "10");
}

// function makeAnswer(button) {
//   let options = ["YES", "NO"];
//   if (button == "left") options.reverse();
//   let answer = options[Math.floor(Math.random() * 2)];
//   let answerHTML = elt("h1", { id: "answer", class: "answer" }, answer);
//   document.body.appendChild(answerHTML);
//   setTimeout(() => {
//     answerHTML.remove();
//   }, "3000");
// }

function elt(type, props, ...children) {
  let element = document.createElement(type);
  // if (props) Object.assign(element, props);
  if (props && Array.isArray(props)) {
    // let atts = props[1]
    //  let props = props[0]
    for (let att of Object.keys(props[1])) {
      element.setAttribute(att, props[1][att]);
    }
    Object.assign(element, props[0]);
  } else Object.assign(element, props);
  for (let child of children) {
    if (typeof child != "string") element.appendChild(child);
    else element.appendChild(document.createTextNode(child));
  }
  return element;
}
