let task = document.querySelector("input");
let btn = document.getElementById("save");
let cartona = document.querySelector(".cartona");
let arr = [];

if (window.localStorage.getItem("save")) {
  arr = arr.concat(JSON.parse(window.localStorage.getItem("save")));
  arr.forEach(function (e) {
    let div = document.createElement("div");
    div.className="item";
    let p = document.createElement("p");
    let btn = document.createElement("button");
    btn.className="delete";
    p.innerHTML = e;
    btn.innerHTML = "Delete";
    div.appendChild(p);
    div.appendChild(btn);
    cartona.appendChild(div);
  });

}
btn.addEventListener("click", function () {
if ((task.value == "")||(arr.includes(task.value))) {
  return;
}
else {
    arr = arr.concat(task.value);
    window.localStorage.setItem("save", JSON.stringify(arr));
  let div = document.createElement("div");
  div.className="item";
      let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.className="delete";
      p.innerHTML = task.value;
      btn.innerHTML = "Delete";
      div.appendChild(p);
      div.appendChild(btn);
  cartona.appendChild(div);
  task.value = "";
    let del = document.querySelectorAll(".delete");
  del.forEach(function (e) {
    e.addEventListener("click", function (el) {
      arr = JSON.parse(window.localStorage.getItem("save"));
      arr = arr.filter(item => item != `${el.currentTarget.previousElementSibling.innerHTML}`);
      window.localStorage.setItem("save", JSON.stringify(arr));
      el.currentTarget.parentElement.remove();
    });
  });
  }
});
  let del = document.querySelectorAll(".delete");
del.forEach(function (e) {
  e.addEventListener("click", function (el) {
    arr = JSON.parse(window.localStorage.getItem("save"));
    arr = arr.filter(item => item != `${el.currentTarget.previousElementSibling.innerHTML}`);
    window.localStorage.setItem("save", JSON.stringify(arr));
    el.currentTarget.parentElement.remove();
  });
});





