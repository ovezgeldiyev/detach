// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.addEventListener("click", function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
});
// menu end
// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// modals start
const closeBtns = document.querySelectorAll(".modallClose").forEach((e) => {
  e.addEventListener("click", function (x) {
    console.log(x.target.dataset.modal);
    var ModalId = x.target.dataset.modal;
    document.querySelector("#" + ModalId).classList.remove("active");
  });
});
const modallBtn = document.querySelectorAll(".modallBtn");
const modallItems = document.querySelectorAll(".modall");
modallBtn.forEach((e) => {
  onTabClick(modallBtn, modallItems, e);
});
function onTabClick(modallBtns, modallItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (e.srcElement.classList.contains("active")) {
      e.srcElement.classList.remove("active");
    } else if (!currentBtn.classList.contains("active")) {
      modallBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      modallItems.forEach(function (item) {
        item.classList.remove("active");
      });
      //currentBtn.classList.add('active');
      currentTab.classList.add("active");
    }
  });
  window.onclick = function (event) {
    modallItems.forEach((black) => {
      if (black == event.target) {
        black.classList.remove("active");
      }
    });
  };
}
// modals end

// select start
const selectFunc = () => {
  const selects = document.querySelectorAll(".customSelect");
  selects.forEach((select) => {
    const selected = select.querySelector(".customSelect__selected");
    const selectOptions = select.querySelector(".customSelect__options");
    const listItems = selectOptions.querySelectorAll(
      ".customSelect__options-item"
    );
    selected.onclick = () => {
      select.classList.toggle("active");
    };
    listItems.forEach((listItem) => {
      listItem.onclick = () => {
        selected.innerHTML = listItem.innerHTML;
        select.classList.remove("active");
      };
    });
  });
};
selectFunc();
// select end
const dropdown = document.getElementById("dropdown");
if (dropdown) {
  dropdown.onclick = () => {
    dropdown.classList.toggle("active");
  };
}
