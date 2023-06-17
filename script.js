import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
    databaseURL: "https://realtime-database-addtocart-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const shoppingListCart = ref(database, "shoppingList")


const addButtonEl = document.getElementById("add-button")
const inputFieldEl = document.getElementById("input-field")

addButtonEl.addEventListener("click", function() {
    const dataval = inputFieldEl.value
    console.log(`${dataval} has been added to the cart!`)
    push(shoppingListCart, dataval)
})