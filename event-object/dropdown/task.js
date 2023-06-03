const dropDown = document.querySelector(".dropdown__value");
const dropList = document.querySelector(".dropdown__list");
const dropLink = document.querySelectorAll(".dropdown__link");
const dropItem = document.querySelectorAll(".dropdown__item");

function dropdownClose () {
    dropDown.addEventListener("click", () => {
        dropList.classList.toggle("dropdown__list_active");
    })
}
dropdownClose();

function dropdownUp () {
    dropList.classList.toggle("dropdown__list_active");
}

for (let i = 0; i < dropItem.length; i++) {
    dropItem[i].onclick = function() {
        dropDown.textContent = dropItem[i].querySelector(".dropdown__link").textContent;
        dropList.classList.remove("dropdown__list_active");
        if (dropItem[i].querySelector(".dropdown__link")) {
            return false;
        }
    }
}

