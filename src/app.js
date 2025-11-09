import games from "./games.json"
import temlates from "./templates-games.hbs"

const listRef = document.querySelector(".list")

listRef.innerHTML = temlates({games})