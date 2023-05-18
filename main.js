

 

var icon = document.getElementById("toggleDark").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme")
 
})




const Year = new Date().getFullYear();

document.getElementById("year").innerHTML = Year