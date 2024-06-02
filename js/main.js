"use strict";

const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach((element) => {
    element.addEventListener("click", open);
});

function open(event) {
    const tabTarget = event.currentTarget;
    console.log(tabTarget)
    const button = tabTarget.dataset.button;
    console.log(button)

    tabItem.forEach((element) => {
        element.classList.remove("tabs__btn-item--active");
    });
    tabContent.forEach((element) => {
        element.classList.remove("tabs__content-item--active");
    });
    tabTarget.classList.add("tabs__btn-item--active");
    document.querySelector(`#${button}`).classList.add("tabs__content-item--active");
}
