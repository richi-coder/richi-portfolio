let btn = document.querySelector("#show-all");
let project = document.querySelectorAll(".project");
let projectImage = document.querySelectorAll(".project-image");
let paragraph = document.querySelectorAll(".paragraph");
let shots = document.querySelector(".shots");
let logo = document.querySelector(".logo");
let icon = document.querySelector("#mobilebutton");
let mobileMenu = document.querySelector("#mobilemenu");

/* CountApi */ 
// id: 94d68d37-4c42-4a3c-87c1-08b6ad7bbe4c
fetch("https://api.countapi.xyz/hit/richiportfolio/94d68d37-4c42-4a3c-87c1-08b6ad7bbe4c")
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                return response.json();
            })
            .then(json => console.log(`Times visited: ${json.value}`))
            .catch((err) => console.error(`${err.message}`)); // Fetch ends here

icon.onclick= () => {
    icon.classList.toggle("fa-close");
    icon.classList.toggle("fa-bars");
    if (icon.classList.contains("fa-close")) {
        mobileMenu.style.display = "block";
        mobileMenu.style.visibility = "visible";
    } else {
        mobileMenu.style.display = "none";
        mobileMenu.style.visibility = "hidden";
    }
    mobileMenu.classList.toggle("reveal");
}

logo.onclick = () => location.reload();

window.addEventListener("scroll", () => {
    if (document.documentElement.clientWidth < 920) {  // MOBILE
        if (document.documentElement.scrollTop > 180 && document.documentElement.scrollTop <= 220) {
            console.log("animate top projects")
            document.getElementById("top-projects").classList.add("shine");
        }
        if (document.documentElement.scrollTop > 220 && document.documentElement.scrollTop <= 670) {
            document.getElementsByClassName("project")[0].classList.add("right-reveal");
        }
        if (document.documentElement.scrollTop > 670 && document.documentElement.scrollTop <= 1170) {
            document.getElementsByClassName("project")[1].classList.add("left-reveal");
        }      
        if (document.documentElement.scrollTop > 1170 && document.documentElement.scrollTop <= 1600) {
            document.getElementsByClassName("project")[2].classList.add("right-reveal");
        }  
        if (document.documentElement.scrollTop > 1600) {
            document.getElementsByClassName("project")[3].classList.add("left-reveal");
        }  
    }
    else { // DESKTOP OR LARGE SCREENS
        console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop > 160 && document.documentElement.scrollTop <= 180) {
            console.log("animate top projects")
            document.getElementById("top-projects").classList.add("shine");
        }
        if (document.documentElement.scrollTop > 180 && document.documentElement.scrollTop <= 650) {
            document.getElementsByClassName("project")[0].classList.add("right-reveal");
            document.getElementsByClassName("project")[1].classList.add("right-reveal");
        }
        if (document.documentElement.scrollTop > 650 && document.documentElement.scrollTop <= 1120) {
            document.getElementsByClassName("project")[2].classList.add("left-reveal");
            document.getElementsByClassName("project")[3].classList.add("left-reveal");
        } 
    }
})
