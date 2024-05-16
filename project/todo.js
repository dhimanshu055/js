const item = document.querySelector("#items");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        addToDo(this.value);
        this.value = "";
    }
});

const addToDo = (itemText) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${itemText}
        <i class="fas fa-times"></i>
        <button onclick = deletes(this.nodeParent)>delete</button>
        `;
    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
    });
    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
    });
    toDoBox.appendChild(listItem); // Corrected the typo in appendChild

    function deletes(vikash) {
        vikash.style.display = "none"
        
    }
};
