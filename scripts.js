import headingComponent from "./components/header/header.js"
import splitComponent from "./components/split/split.js"
import footerComponent from "./components/footer/footer.js"
document.getElementById("heading").innerHTML = headingComponent()
document.getElementById("split").innerHTML = splitComponent()
document.getElementById("footer").innerHTML = footerComponent()