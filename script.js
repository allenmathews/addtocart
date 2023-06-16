const addButtonEl = document.getElementById("add-button")
const inputFieldEl = document.getElementById("input-field")

addButtonEl.addEventListener("click", function() {
    const dataval = inputFieldEl.value
    console.log(dataval)
})