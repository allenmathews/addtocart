import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
    databaseURL: "https://realtime-database-addtocart-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")


const addButtonEl = document.getElementById("add-button")
const inputFieldEl = document.getElementById("input-field")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    const dataval = inputFieldEl.value
    inputFieldEl.value = "";
    shoppingListEl.innerHTML += `<li>${dataval}</li>`

    console.log(`${dataval} has been added to the cart!`)
    push(shoppingListInDB, dataval)
})