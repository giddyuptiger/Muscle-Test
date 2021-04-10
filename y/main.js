// document.addEventListener("DOMContentLoaded", function () {
//   const loadEl = document.querySelector("#load");
//   // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//   // // The Firebase SDK is initialized and available here!
//   //
//   // firebase.auth().onAuthStateChanged(user => { });
//   // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
//   // firebase.firestore().doc('/foo/bar').get().then(() => { });
//   // firebase.functions().httpsCallable('yourFunction')().then(() => { });
//   // firebase.messaging().requestPermission().then(() => { });
//   // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
//   // firebase.analytics(); // call to activate
//   // firebase.analytics().logEvent('tutorial_completed');
//   // firebase.performance(); // call to activate
//   //
//   // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

//   try {
//     let app = firebase.app();
//     let features = [
//       "auth",
//       "database",
//       "firestore",
//       "functions",
//       "messaging",
//       "storage",
//       "analytics",
//       "remoteConfig",
//       "performance",
//     ].filter((feature) => typeof app[feature] === "function");
//     loadEl.textContent = `Firebase SDK loaded with ${features.join(", ")}`;
//   } catch (e) {
//     console.error(e);
//     loadEl.textContent = "Error loading the Firebase SDK, check the console.";
//   }
// });
let buttonDiv = elt("div", { id: "buttons" });
document.body.appendChild(buttonDiv);
setButtons();

function setButtons() {
  buttonDiv.innerHTML = "";
  let options = {};
  let answer = Math.floor(Math.random() * 2);
  if (answer == 0) options = { left: true, right: false };
  if (answer == 1) options = { left: false, right: true };
  buttonDiv.appendChild(
    elt("button", {
      id: "left-btn",
      className: "button",
      "data-answer": options.left,
      onclick: function () {
        showAnswer(options.left);
      },
    })
  );
  buttonDiv.appendChild(
    elt("button", {
      id: "right-btn",
      className: "button",
      "data-answer": options.right,
      onclick: function () {
        showAnswer(options.right);
      },
    })
  );
}

// document.body.appendChild(
//   elt(
//     "div",
//     { id: "buttons" },
//     elt("button", {
//       id: "button1",
//       className: "button",
//       onclick: function () {
//         makeAnswer("left");
//       },
//     }),
//     elt("button", {
//       id: "button2",
//       className: "button",
//       onclick: function () {
//         makeAnswer("right");
//       },
//     })
//   )
// );

let answerBox = elt("div", { id: "answerBox" });
document.body.appendChild(answerBox);

function showAnswer(answer) {
  if (answer) {
    answer = "TRUE";
  } else {
    answer = "FALSE";
  }
  answerBox.innerHTML = "";
  let answerHTML = elt("h1", { id: "answer", class: "answer" }, answer);
  setButtons();
  answerBox.appendChild(answerHTML);
  answerBox.style.display = "none";
  setTimeout(() => {
    answerBox.style.display = "block";
  }, "20");
  setTimeout(() => {
    answerHTML.remove();
  }, "3000");
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
